export interface LeadData {
  name: string;
  email: string;
  company?: string;
  product?: string;
  selectedTools?: string[];
  message?: string;
  timestamp?: string;
}

// Default or configured Google Apps Script Web App URL
const DEFAULT_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyvtYUnJBlNPH7-wB5pKnkrMCVf0wgLGWjID1UaTzVkiOctCNLGgsFs5Dho43Le90k/exec';

export async function submitLeadToGoogleSheet(data: LeadData): Promise<{ success: boolean; message: string }> {
  const formattedDate = new Date().toLocaleString();
  const toolsString = data.selectedTools && data.selectedTools.length > 0 ? data.selectedTools.join(', ') : 'None specified';

  const payload = {
    Timestamp: formattedDate,
    Name: data.name,
    Email: data.email,
    Company: data.company || 'N/A',
    Product: data.product || 'General',
    'BIM Software': toolsString,
    selectedTools: toolsString,
    Message: data.message || 'No additional message',
    timestamp: new Date().toISOString()
  };

  // Always save locally in localStorage as a backup
  try {
    const existing = JSON.parse(localStorage.getItem('bimaihub_leads_backup') || '[]');
    existing.push(payload);
    localStorage.setItem('bimaihub_leads_backup', JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not save lead to localStorage', err);
  }

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || DEFAULT_SCRIPT_URL;

  if (scriptUrl) {
    try {
      // Method 1: Send raw JSON with text/plain (Google Apps Script e.postData.contents)
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      // Method 2: Fallback URLSearchParams (Google Apps Script e.parameter)
      const formData = new URLSearchParams();
      formData.append('Timestamp', formattedDate);
      formData.append('Name', data.name);
      formData.append('Email', data.email);
      formData.append('Company', data.company || 'N/A');
      formData.append('Product', data.product || 'General');
      formData.append('BIM Software', toolsString);
      formData.append('Message', data.message || 'No additional message');

      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      }).catch(() => {});

      return { success: true, message: 'Lead submitted successfully!' };
    } catch (error) {
      console.error('Error sending lead to Google Apps Script:', error);
      return { success: true, message: 'Saved locally.' };
    }
  }

  return { success: true, message: 'Lead recorded.' };
}
