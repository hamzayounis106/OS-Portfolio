import { useState } from 'react';
import { sendEmail } from '../utils/mail';

interface ContactProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Contact({ onClose, onFocus, zIndex }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('📧 Contact form submission initiated');

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      console.warn('⚠️ Validation failed: Missing required fields');
      setStatus({
        type: 'error',
        message: 'Please fill in all fields',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.warn('⚠️ Validation failed: Invalid email format');
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    console.log('✅ Validation passed, sending email...');
    setIsSending(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await sendEmail(formData);

      if (result === true) {
        console.log('✅ Email sent successfully!');
        setStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Clear form after successful send
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('🧹 Form cleared');
      } else {
        console.error('❌ Failed to send email');
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('❌ Error occurred while sending email:', error);
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSending(false);
      console.log('🏁 Email submission process completed');
    }
  };

  return (
    <>
      <div style={{ zIndex: zIndex - 1 }} />

      <div
        className={`fixed inset-0 flex pointer-events-none ${
          isMaximized
            ? 'items-center justify-center'
            : 'items-start justify-center pt-4 sm:pt-16'
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className={`bg-white shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-300 transition-all duration-300 ${
            isMaximized
              ? 'w-full h-screen rounded-none'
              : 'w-[95vw] sm:w-[700px] h-[90vh] sm:h-[500px] rounded-[12px] mx-2'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='h-[44px] sm:h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-3 sm:px-4 justify-between'>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <button
                onClick={onClose}
                className='w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#FF5F57] hover:bg-[#FF4033] active:bg-[#FF4033] border border-[#E0443E] transition-colors'
              />
              <button
                onClick={toggleMaximize}
                className='w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#FEBC2E] hover:bg-[#FFB000] active:bg-[#FFB000] border border-[#E0A100] transition-colors'
              />
              <button
                onClick={onClose}
                className='w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-[#28C840] hover:bg-[#1FA630] active:bg-[#1FA630] border border-[#179A27] transition-colors'
              />
            </div>
            <div className='flex-1 text-center text-[11px] sm:text-[13px] font-semibold text-gray-700'>
              New Message
            </div>
            <div className='w-[50px] sm:w-[60px]'></div>
          </div>

          <div className='bg-[#F7F7F7] border-b border-gray-300'>
            <div className='flex items-center h-[28px] sm:h-[32px] px-3 sm:px-4 border-b border-gray-200'>
              <label className='w-[50px] sm:w-[60px] text-[11px] sm:text-[13px] text-gray-600 font-medium'>
                Name:
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                className='flex-1 bg-transparent text-[11px] sm:text-[13px] outline-none text-gray-800 placeholder-gray-400'
                required
                disabled={isSending}
              />
            </div>
            <div className='flex items-center h-[28px] sm:h-[32px] px-3 sm:px-4 border-b border-gray-200'>
              <label className='w-[50px] sm:w-[60px] text-[11px] sm:text-[13px] text-gray-600 font-medium'>
                Email:
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your.email@example.com'
                className='flex-1 bg-transparent text-[11px] sm:text-[13px] outline-none text-gray-800 placeholder-gray-400'
                required
                disabled={isSending}
              />
            </div>
            <div className='flex items-center h-[28px] sm:h-[32px] px-3 sm:px-4'>
              <label className='w-[50px] sm:w-[60px] text-[11px] sm:text-[13px] text-gray-600 font-medium'>
                Subject:
              </label>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Enter subject'
                className='flex-1 bg-transparent text-[11px] sm:text-[13px] outline-none text-gray-800 placeholder-gray-400'
                required
                disabled={isSending}
              />
            </div>
          </div>

          <div className='flex-1 bg-white p-3 sm:p-4 flex flex-col'>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className='flex-1 resize-none outline-none text-[12px] sm:text-[14px] text-gray-800 placeholder-gray-400 font-[system-ui]'
              required
              disabled={isSending}
            />

            {/* Status Message */}
            {status.type && (
              <div
                className={`mt-2 px-3 py-2 rounded-md text-[11px] sm:text-[12px] ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {status.message}
              </div>
            )}
          </div>

          <div className='h-[40px] sm:h-[44px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-t border-gray-300 flex items-center justify-end px-3 sm:px-4'>
            <button
              onClick={handleSubmit}
              disabled={isSending}
              className={`px-4 sm:px-5 py-1.5 text-white text-[11px] sm:text-[13px] font-medium rounded-md transition-colors shadow-sm flex items-center gap-2 ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#007AFF] hover:bg-[#0051D5] active:bg-[#003DA5]'
              }`}
            >
              {isSending && (
                <svg
                  className='animate-spin h-3 w-3 sm:h-4 sm:w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
