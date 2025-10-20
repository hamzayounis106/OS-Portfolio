import { useState } from 'react';

interface BrowserProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Browser({ onClose, onFocus, zIndex }: BrowserProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const cvUrl = '/cv.pdf';

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* <div
        className='fixed inset-0 bg-black/20 backdrop-blur-sm'
        style={{ zIndex: zIndex - 1 }}
        onClick={onClose}
      /> */}

      <div
        className={`fixed inset-0 flex pointer-events-none ${
          isMaximized
            ? 'items-center justify-center'
            : 'items-start justify-center pt-4 sm:pt-10'
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className={`bg-[#ECECEC] shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-400 transition-all duration-300 ${
            isMaximized
              ? 'w-full h-screen rounded-none'
              : 'w-[95vw] sm:w-[1000px] h-[90vh] sm:h-[600px] rounded-[12px] mx-2'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
          <div className='h-[44px] sm:h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-3 sm:px-4 justify-between'>
            <div className='flex items-center gap-2 sm:gap-3'>
              {/* Traffic Light Buttons */}
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
            </div>

            <div className='flex-1 text-center text-[11px] sm:text-[13px] font-semibold text-gray-700'>
              Resume / CV
            </div>
            <div className='w-[50px] sm:w-[60px]'></div>
          </div>

          {/* PDF Viewer */}
          <div className='flex-1 bg-gray-900 relative'>
            {isLoading && (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-900 z-10'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 border-4 border-gray-700 border-t-red-600 rounded-full animate-spin'></div>
                  <p className='text-xs sm:text-sm text-gray-300'>
                    Loading PDF...
                  </p>
                </div>
              </div>
            )}
            <iframe
              id='pdf-viewer'
              src={cvUrl}
              onLoad={handleIframeLoad}
              className='w-full h-full border-0'
              title='CV PDF Viewer'
            />
          </div>

          {/* Status Bar */}
          <div className='h-[24px] sm:h-[28px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-t border-gray-300 flex items-center justify-between px-3 sm:px-4 text-[10px] sm:text-[11px] text-gray-600'>
            <div className='flex items-center gap-2 sm:gap-4'>
              <span>📄 PDF Document</span>
              <span className='hidden sm:inline text-gray-400'>|</span>
              <span className='hidden sm:inline'>Ready to view</span>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500'></div>
              <span>Loaded</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Browser;
