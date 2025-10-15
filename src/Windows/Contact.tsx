import { useState } from 'react';

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <div style={{ zIndex: zIndex - 1 }} />

      <div
        className={`fixed inset-0 flex pointer-events-none ${
          isMaximized
            ? 'items-center justify-center'
            : 'items-start justify-center pt-16'
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className={`bg-white shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-300 transition-all duration-300 ${
            isMaximized
              ? 'w-full h-screen rounded-none'
              : 'w-[700px] h-[500px] rounded-[12px]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-4 justify-between'>
            <div className='flex items-center gap-2'>
              <button
                onClick={onClose}
                className='w-[12px] h-[12px] rounded-full bg-[#FF5F57] hover:bg-[#FF4033] border border-[#E0443E] transition-colors'
              />
              <button
                onClick={toggleMaximize}
                className='w-[12px] h-[12px] rounded-full bg-[#FEBC2E] hover:bg-[#FFB000] border border-[#E0A100] transition-colors'
              />
              <button
                onClick={onClose}
                className='w-[12px] h-[12px] rounded-full bg-[#28C840] hover:bg-[#1FA630] border border-[#179A27] transition-colors'
              />
            </div>
            <div className='flex-1 text-center text-[13px] font-semibold text-gray-700'>
              New Message
            </div>
            <div className='w-[60px]'></div>
          </div>

          <div className='bg-[#F7F7F7] border-b border-gray-300'>
            <div className='flex items-center h-[32px] px-4 border-b border-gray-200'>
              <label className='w-[60px] text-[13px] text-gray-600 font-medium'>
                From:
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your.email@example.com'
                className='flex-1 bg-transparent text-[13px] outline-none text-gray-800 placeholder-gray-400'
                required
              />
            </div>
            <div className='flex items-center h-[32px] px-4 border-b border-gray-200'>
              <label className='w-[60px] text-[13px] text-gray-600 font-medium'>
                To:
              </label>
              <input
                type='text'
                value='portfolio@yourname.com'
                disabled
                className='flex-1 bg-transparent text-[13px] outline-none text-gray-500'
              />
            </div>
            <div className='flex items-center h-[32px] px-4'>
              <label className='w-[60px] text-[13px] text-gray-600 font-medium'>
                Subject:
              </label>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Enter subject'
                className='flex-1 bg-transparent text-[13px] outline-none text-gray-800 placeholder-gray-400'
                required
              />
            </div>
          </div>

          <div className='flex-1 bg-white p-4'>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className='w-full h-full resize-none outline-none text-[14px] text-gray-800 placeholder-gray-400 font-[system-ui]'
              required
            />
          </div>

          <div className='h-[44px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-t border-gray-300 flex items-center justify-between px-4'>
            <div className='flex items-center gap-3'>
              <button className='text-gray-600 hover:text-gray-800 transition-colors'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                  />
                </svg>
              </button>
              <button className='text-gray-600 hover:text-gray-800 transition-colors'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className='px-5 py-1.5 bg-[#007AFF] hover:bg-[#0051D5] text-white text-[13px] font-medium rounded-md transition-colors shadow-sm'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
