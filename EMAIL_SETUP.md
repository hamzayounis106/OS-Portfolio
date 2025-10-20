# Email Integration Setup

## Overview

This portfolio uses a centralized email service hosted on Hostinger at `hamza.creatic.pro`.

## Files Structure

```
src/
  utils/
    mail.ts          # Email utility with sendEmail function
  Windows/
    Contact.tsx      # Contact form component
public/
  send-email.php     # PHP email endpoint (backup/local)
```

## Production Setup (Hostinger)

### Email Service URL

The production email service is hosted at:

```
https://hamza.creatic.pro/send-email.php
```

### Configuration Steps

1. **Upload send-email.php to Hostinger**

   - Upload `send-email.php` to your Hostinger domain root
   - Ensure the file has proper permissions (644)
   - Update the `$to` email address in the PHP file

2. **Update Domain in mail.ts** (if needed)

   - Current endpoint: `https://hamza.creatic.pro/send-email.php`
   - Update if using a different domain

3. **Test Email Functionality**
   ```bash
   # Test with curl
   curl -X POST https://hamza.creatic.pro/send-email.php \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test Subject",
       "message": "Test message"
     }'
   ```

## Local Development

For local development, you can:

1. Use the production endpoint (already configured)
2. Or set up a local PHP server:
   ```bash
   cd public
   php -S localhost:8000
   ```
   Then update mail.ts to use: `http://localhost:8000/send-email.php`

## Email Data Structure

```typescript
interface EmailData {
  name: string; // Sender's name
  email: string; // Sender's email
  subject: string; // Email subject
  message: string; // Email message body
}
```

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Error Response

```json
{
  "error": "Error message here"
}
```

## Console Logging

The mail utility provides detailed console logs:

- 📧 Email sending initiated
- 📦 Payload details
- 📬 Response received
- ✅ Success confirmation
- ❌ Error details with stack trace

## Security Notes

1. **CORS**: The PHP file allows cross-origin requests
2. **Validation**: Both client-side and server-side validation
3. **Email Validation**: PHP's `filter_var()` ensures valid email format
4. **Rate Limiting**: Consider adding rate limiting in production
5. **reCAPTCHA**: Consider adding reCAPTCHA for spam prevention

## Troubleshooting

### Email not sending

1. Check console logs for detailed error messages
2. Verify PHP mail function is enabled on server
3. Check server error logs
4. Verify sender email domain is allowed

### CORS Errors

1. Ensure CORS headers are set in PHP
2. Check `.htaccess` configuration
3. Verify domain whitelist if implemented

### 500 Server Error

1. Check PHP error logs
2. Verify mail server configuration
3. Check file permissions
4. Ensure all PHP extensions are installed

## Production Checklist

- [ ] Update `$to` email in send-email.php
- [ ] Update "From" domain in send-email.php (line 47)
- [ ] Upload send-email.php to Hostinger
- [ ] Test email sending
- [ ] Verify console logs show success
- [ ] Check inbox for test email
- [ ] Add rate limiting (optional)
- [ ] Add reCAPTCHA (optional)
