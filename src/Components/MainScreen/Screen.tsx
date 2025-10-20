function Screen() {
  const socialLinks = [
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
    <div className='w-full h-screen'>
      <div className='absolute inset-0'>
        <img
          src='./Wallpapers/5KRESO~2_moreDetail_x2_3840x2160.png'
          alt='Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-5'></div>
      </div>

      {/* Mobile Social Shortcuts - Only visible on mobile */}
      <div className='sm:hidden absolute top-4 right-4 flex flex-col gap-3 z-10'>
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='w-[60px] h-[60px] bg-white/10 backdrop-blur-md rounded-[14px] border border-white/20 shadow-lg flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform duration-200'
          >
            <img
              src={link.src}
              alt={link.alt}
              className='w-[36px] h-[36px] object-contain'
            />
            <span className='text-[8px] text-white font-medium text-center leading-tight drop-shadow-md'>
              {link.alt.split(' ')[0]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Screen;
