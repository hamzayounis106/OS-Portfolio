type WindowType = 'finder' | 'email' | 'settings' | 'user' | 'cv' | 'techstack';

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
      src: './Icons/Dock/setting.png',
      alt: 'Tech Stack',
      type: 'techstack',
    },
  ];

  const socialLinks: { src: string; alt: string; url: string }[] = [
    {
      src: './Icons/Dock/linkedin-app-icon.svg',
      alt: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-hamza-younis-dev/',
    },
    {
      src: './Icons/Dock/fiverr-icon.svg',
      alt: 'Fiverr',
      url: 'https://www.fiverr.com/hamzayounis_105',
    },

    {
      src: './Icons/Dock/upwork-icon.svg',
      alt: 'Upwork',
      url: 'https://upwork.com/freelancers/muhammadhamzay',
    },
    {
      src: './Icons/Dock/github-icon.svg',
      alt: 'GitHub',
      url: 'http://github.com/hamzayounis106/',
    },
    {
      src: './Icons/Dock/gnome-icon.svg',
      alt: 'GNOME Extensions',
      url: 'https://extensions.gnome.org/accounts/profile/luminex',
    },
  ];

  return (
    <div className='fixed bottom-5 left-0 right-0 max-w-[600px] h-[58px] backdrop-blur-sm bg-[#7B7B7B]/[0.4] rounded-[22px] mx-auto px-3 border-white/[0.4] border-[0.5px] flex items-center justify-center shadow-black shadow z-50'>
      <div className='flex items-center gap-[2px]'>
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

        {/* Divider */}
        <div className='w-[1px] h-[40px] bg-white/30 mx-3'></div>

        {/* Social Links */}
        <div className='flex items-center gap-[8px]'>
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer hover:translate-y-[-2px] transition-transform duration-200 group relative'
            >
              <img
                src={link.src}
                className='w-[50px] h-[46px]'
                alt={link.alt}
              />
              {/* Tooltip */}
              <span className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
                {link.alt}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dock;
