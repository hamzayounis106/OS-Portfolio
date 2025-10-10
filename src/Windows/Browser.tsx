import { useState } from 'react';

interface BrowserProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Browser({ onClose, onFocus, zIndex }: BrowserProps) {
  const [isLoading, setIsLoading] = useState(true);
  const cvUrl = '/cv.pdf';

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
        className='fixed inset-0 flex items-center justify-center pointer-events-none'
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className='w-[1000px] h-[700px] bg-[#ECECEC] rounded-[12px] shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-400'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
          <div className='h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-4 justify-between'>
            <div className='flex items-center gap-3'>
              {/* Traffic Light Buttons */}
              <div className='flex items-center gap-2'>
                <button
                  onClick={onClose}
                  className='w-[12px] h-[12px] rounded-full bg-[#FF5F57] hover:bg-[#FF4033] border border-[#E0443E] transition-colors'
                />
                <button className='w-[12px] h-[12px] rounded-full bg-[#FEBC2E] hover:bg-[#FFB000] border border-[#E0A100] transition-colors' />
                <button className='w-[12px] h-[12px] rounded-full bg-[#28C840] hover:bg-[#1FA630] border border-[#179A27] transition-colors' />
              </div>
            </div>

            <div className='flex-1 text-center text-[13px] font-semibold text-gray-700'>
              Resume / CV
            </div>
            <div className='w-[60px]'></div>
          </div>

          {/* PDF Viewer */}
          <div className='flex-1 bg-gray-900 relative'>
            {isLoading && (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-900 z-10'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='w-12 h-12 border-4 border-gray-700 border-t-red-600 rounded-full animate-spin'></div>
                  <p className='text-sm text-gray-300'>Loading PDF...</p>
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
          <div className='h-[28px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-t border-gray-300 flex items-center justify-between px-4 text-[11px] text-gray-600'>
            <div className='flex items-center gap-4'>
              <span>📄 PDF Document</span>
              <span className='text-gray-400'>|</span>
              <span>Ready to view</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-green-500'></div>
              <span>Loaded</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Browser;
