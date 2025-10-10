type WindowType = 'finder' | 'email' | 'settings' | 'user' | 'cv' | 'folder';

interface DockProps {
  onWindowOpen: (windowType: WindowType) => void;
}

function Dock({ onWindowOpen }: DockProps) {
  const dockItems: { src: string; alt: string; type: WindowType }[] = [
    {
      src: './Icons/Dock/finder.png',
      alt: 'Finder',
      type: 'finder',
    },
    {
      src: './Icons/Dock/email.png',
      alt: 'Email',
      type: 'email',
    },
    {
      src: './Icons/Dock/setting.png',
      alt: 'Settings',
      type: 'settings',
    },
    {
      src: './Icons/Dock/user.png',
      alt: 'User',
      type: 'user',
    },
    {
      src: './Icons/Dock/cv.png',
      alt: 'CV',
      type: 'cv',
    },
    {
      src: './Icons/Dock/folder.png',
      alt: 'Folder',
      type: 'folder',
    },
  ];

  return (
    <div className='fixed bottom-5 left-0 right-0 max-w-[350px] h-[58px] backdrop-blur-sm bg-[#7B7B7B]/[0.4] rounded-[22px] mx-auto px-2 border-white/[0.4] border-[0.5px] flex items-center justify-center shadow-black shadow z-50'>
      <div className='flex justify-between items-center gap-[2px]'>
        {dockItems.map((item) => (
          <button
            key={item.alt}
            onClick={() => onWindowOpen(item.type)}
            className='cursor-pointer hover:translate-y-[-2px] transition-transform duration-200 group relative'
          >
            <img src={item.src} className='w-[53px] h-[54px]' alt={item.alt} />
            {/* Tooltip */}
            <span className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
              {item.alt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dock;
