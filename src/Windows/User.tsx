interface UserProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  onWindowOpen: (windowType: 'finder' | 'email' | 'cv') => void;
}

function User({ onClose, onFocus, zIndex, onWindowOpen }: UserProps) {
  return (
    <>
      <div style={{ zIndex: zIndex - 1 }} />

      <div
        className='fixed inset-0 flex items-center justify-center pointer-events-none'
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className='w-[450px] bg-white rounded-[12px] shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-300'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
          <div className='h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-4 justify-between'>
            <div className='flex items-center gap-2'>
              <button
                onClick={onClose}
                className='w-[12px] h-[12px] rounded-full bg-[#FF5F57] hover:bg-[#FF4033] border border-[#E0443E] transition-colors'
              />
              <button className='w-[12px] h-[12px] rounded-full bg-[#FEBC2E] hover:bg-[#FFB000] border border-[#E0A100] transition-colors' />
              <button className='w-[12px] h-[12px] rounded-full bg-[#28C840] hover:bg-[#1FA630] border border-[#179A27] transition-colors' />
            </div>
            <div className='flex-1 text-center text-[13px] font-semibold text-gray-700'>
              Profile
            </div>
            <div className='w-[60px]'></div>
          </div>

          {/* Main Content */}
          <div className='bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col items-center'>
            {/* Profile Image */}
            <div className='w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4'>
              <img
                src='./me.png'
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Name */}
            <h1 className='text-2xl font-serif italic text-gray-800 mb-2'>
              Muhammad Hamza Younis
            </h1>

            {/* Divider */}
            <div className='w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4'></div>

            {/* Bio Description */}
            <p className='text-sm text-gray-600 text-center leading-relaxed max-w-[350px] mb-6'>
              Full-stack developer specializing in MERN stack, WordPress, and
              modern web technologies. Passionate about creating elegant
              solutions and exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className='flex gap-3 mb-6'>
              <button
                onClick={() => onWindowOpen('email')}
                className='px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                Contact
              </button>
              <button
                onClick={() => onWindowOpen('finder')}
                className='px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                Projects
              </button>
              <button
                onClick={() => onWindowOpen('cv')}
                className='px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
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
