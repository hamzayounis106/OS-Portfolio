interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailErrorResponse {
  useEmailFallback: boolean;
  error: string;
}

interface NoCorsResponse {
  attemptedNoCors: boolean;
}

type EmailResponse = boolean | EmailErrorResponse | NoCorsResponse;

export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  try {
    console.log('📧 Sending email via Hostinger mail service...');
    console.log('📦 Email payload:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      messageLength: data.message.length,
    });

    const response = await fetch('https://hamza.creatic.pro/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    console.log('📬 Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ API Error (${response.status}):`, errorText);
      throw new Error(`Server responded with ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log('📦 Response data:', result);

    if (result.success) {
      console.log('✅ Email sent successfully!');
      return true;
    } else {
      console.error('❌ Email sending failed:', result.error);
      throw new Error(result.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('🔍 Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      type: error instanceof Error ? error.constructor.name : typeof error,
    });
    throw error;
  }
}
