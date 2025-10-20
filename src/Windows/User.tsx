import { useState } from 'react';

interface UserProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  onWindowOpen: (windowType: 'finder' | 'email' | 'cv') => void;
}

function User({ onClose, onFocus, zIndex, onWindowOpen }: UserProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
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
              : 'w-[95vw] sm:w-[450px] rounded-[12px] mx-2'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
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
              Profile
            </div>
            <div className='w-[50px] sm:w-[60px]'></div>
          </div>

          {/* Main Content */}
          <div className='bg-gradient-to-b from-gray-50 to-white p-4 sm:p-8 flex flex-col items-center'>
            {/* Profile Image */}
            <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 sm:mb-4'>
              <img
                src='./me.png'
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Name */}
            <h1 className='text-lg sm:text-2xl font-serif italic text-gray-800 mb-2 text-center px-2'>
              Muhammad Hamza Younis
            </h1>

            {/* Divider */}
            <div className='w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3 sm:my-4'></div>

            {/* Bio Description */}
            <p className='text-xs sm:text-sm text-gray-600 text-center leading-relaxed max-w-[350px] mb-4 sm:mb-6 px-2'>
              Full-stack developer specializing in MERN stack, WordPress, and
              modern web technologies. Passionate about creating elegant
              solutions and exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6 w-full sm:w-auto px-4 sm:px-0'>
              <button
                onClick={() => onWindowOpen('email')}
                className='px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                Contact
              </button>
              <button
                onClick={() => onWindowOpen('finder')}
                className='px-4 sm:px-6 py-2 sm:py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                Projects
              </button>
              <button
                onClick={() => onWindowOpen('cv')}
                className='px-4 sm:px-6 py-2 sm:py-2.5 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                CV
              </button>
            </div>

            {/* Copyright */}
            <p className='text-xs text-gray-400 text-center'>
              © {new Date().getFullYear()} Muhammad Hamza Younis. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
