export interface LeadData {
  name: string;
  email: string;
  company?: string;
  product?: string;
  selectedTools?: string[];
  message?: string;
  timestamp?: string;
}

// Default Google Apps Script Web App URL
const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJphe3h0clwNPzf27bftxCLSIV-x2WfETQ4SDrLXW_E2t0mdUkNlS6U7v2vBrCy5w-vA/exec';

export async function submitLeadToGoogleSheet(data: LeadData): Promise<{ success: boolean; message: string }> {
  const formattedDate = new Date().toLocaleString();
  const toolsString = data.selectedTools && data.selectedTools.length > 0 ? data.selectedTools.join(', ') : 'None specified';

  const nameVal = (data.name || '').trim() || 'Not Provided';
  const emailVal = (data.email || '').trim() || 'Not Provided';
  const companyVal = (data.company || '').trim() || 'N/A';
  const productVal = data.product || 'General';
  const messageVal = (data.message || '').trim() || 'No additional message';

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || DEFAULT_SCRIPT_URL;

  // Ensure scriptUrl uses /exec instead of /dev (Google Apps Script /dev URLs block CORS & web submissions)
  let cleanUrl = (scriptUrl || '').trim();
  if (cleanUrl.endsWith('/dev')) {
    cleanUrl = cleanUrl.replace(/\/dev$/, '/exec');
  }

  // Single comprehensive payload matching all field names in Google Apps Script
  const payload: Record<string, string> = {
    Name: nameVal,
    name: nameVal,
    fullName: nameVal,
    'Your Name': nameVal,

    Email: emailVal,
    email: emailVal,
    workEmail: emailVal,
    'Work Email': emailVal,

    Company: companyVal,
    company: companyVal,
    firm: companyVal,

    Product: productVal,
    product: productVal,
    productInterest: productVal,

    'BIM Software': toolsString,
    bimSoftware: toolsString,
    selectedTools: toolsString,

    Message: messageVal,
    message: messageVal,
    automationNeeds: messageVal,

    Timestamp: formattedDate,
    timestamp: formattedDate
  };

  // Backup in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('bimaihub_leads_backup') || '[]');
    existing.push(payload);
    localStorage.setItem('bimaihub_leads_backup', JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not save lead to localStorage', err);
  }

  if (cleanUrl) {
    try {
      // Build URL query string to guarantee e.parameter is populated
      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => params.append(k, v));

      const targetUrl = cleanUrl.includes('?')
        ? `${cleanUrl}&${params.toString()}`
        : `${cleanUrl}?${params.toString()}`;

      // Send POST request with query params (satisfies e.parameter) AND JSON body (satisfies e.postData.contents)
      await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      return { success: true, message: 'Lead submitted successfully!' };
    } catch (error) {
      console.error('Error sending lead to Google Apps Script:', error);
      return { success: true, message: 'Saved locally.' };
    }
  }

  return { success: true, message: 'Lead recorded.' };
}




