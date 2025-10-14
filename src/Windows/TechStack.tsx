interface TechStackProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function TechStack({ onClose, onFocus, zIndex }: TechStackProps) {
  const techIcons = [
    // Programming Languages
    {
      name: 'JavaScript',
      path: './Icons/Tech/home-desktop-icon-javscript.svg',
      size: 'large',
    },
    {
      name: 'TypeScript',
      path: './Icons/Tech/home-desktop-icon-typescript.svg',
      size: 'medium',
    },

    // Frontend Frameworks & Libraries
    {
      name: 'React',
      path: './Icons/Tech/home-desktop-icon-react.svg',
      size: 'large',
    },
    {
      name: 'Next.js',
      path: './Icons/Tech/home-desktop-icon-nextjs.svg',
      size: 'medium',
    },
    {
      name: 'Tailwind CSS',
      path: './Icons/Tech/home-desktop-icon-tailwindcss.svg',
      size: 'small',
    },

    // Backend & Runtime
    {
      name: 'Node.js',
      path: './Icons/Tech/home-desktop-icon-nodejs.svg',
      size: 'large',
    },
    {
      name: 'Express.js',
      path: './Icons/Tech/express_light.svg',
      size: 'medium',
    },

    // Databases
    {
      name: 'MongoDB',
      path: './Icons/Tech/home-desktop-icon-mongodb.svg',
      size: 'medium',
    },
    {
      name: 'PostgreSQL',
      path: './Icons/Tech/home-desktop-icon-postgresql.svg',
      size: 'large',
    },
    {
      name: 'Prisma',
      path: './Icons/Tech/prisma.png',
      size: 'large',
    },
    {
      name: 'Neon',
      path: './Icons/Tech/Neon-Logo-500.webp',
      size: 'large',
    },

    // Real-time & Communication
    {
      name: 'Socket.IO',
      path: './Icons/Tech/socket-io-icon.svg',
      size: 'large',
    },
    {
      name: 'Pusher',
      path: './Icons/Tech/pusher.png',
      size: 'large',
    },

    // CMS & E-commerce Platforms
    {
      name: 'WordPress',
      path: './Icons/Tech/wordpress-icon.svg',
      size: 'large',
    },
    {
      name: 'WooCommerce',
      path: './Icons/Tech/woocommerce-icon.svg',
      size: 'medium',
    },
    {
      name: 'Shopify',
      path: './Icons/Tech/shopify-icon.svg',
      size: 'large',
    },
    {
      name: 'Elementor',
      path: './Icons/Tech/elementor-icon.svg',
      size: 'small',
    },
    {
      name: 'WPBakery',
      path: './Icons/Tech/WPBakery.jpg',
      size: 'medium',
    },

    // Email & Marketing Tools
    {
      name: 'Brevo',
      path: './Icons/Tech/brevo.png',
      size: 'large',
    },
    {
      name: 'Mailtrap',
      path: './Icons/Tech/mailtrap.svg',
      size: 'large',
    },
    {
      name: 'MJML',
      path: './Icons/Tech/mjml.png',
      size: 'large',
    },

    // Payment Processing
    {
      name: 'Stripe',
      path: './Icons/Tech/stripe-payment-icon.svg',
      size: 'large',
    },

    // DevOps & Tools
    {
      name: 'Git',
      path: './Icons/Tech/home-desktop-icon-git.svg',
      size: 'medium',
    },
    {
      name: 'GitHub',
      path: './Icons/Tech/github-icon.svg',
      size: 'small',
    },
    {
      name: 'Vite',
      path: './Icons/Tech/vite-dev-icon.svg',
      size: 'small',
    },

    // Automation & Workflow
    {
      name: 'n8n',
      path: './Icons/Tech/n8n-icon.svg',
      size: 'medium',
    },

    // Design Tools
    {
      name: 'Figma',
      path: './Icons/Tech/home-desktop-icon-figma.svg',
      size: 'medium',
    },
    {
      name: 'Canva',
      path: './Icons/Tech/canva-icon.svg',
      size: 'small',
    },

    // Hosting & Infrastructure
    {
      name: 'Hostinger',
      path: './Icons/Tech/hostinger-icon.svg',
      size: 'small',
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-18 h-18';
      case 'medium':
        return 'w-28 h-28';
      case 'large':
        return 'w-32 h-32';
      default:
        return 'w-24 h-24';
    }
  };

  return (
    <>
      <div className='z-[60]' />

      <div
        className='fixed inset-0 flex items-center justify-center pointer-events-none'
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className='w-full h-full bg-white/80 backdrop-blur-md pointer-events-auto flex flex-col overflow-hidden'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
          <div className='h-[52px] bg-gradient-to-b from-[#E8E8E8]/90 to-[#D1D1D1]/90 backdrop-blur-sm border-b border-gray-400/50 flex items-center px-4 justify-between'>
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
              Tech Stack
            </div>
            <div className='w-[60px]'></div>
          </div>

          {/* Main Content Area - Full Screen Grid */}
          <div className='flex-1 flex items-center justify-center p-8 overflow-y-auto '>
            <div className='flex flex-col items-center gap-6 mt-[300px]'>
              {/* Row 1 - 5 items */}
              <div className='flex items-center justify-center gap-6'>
                <div className='w-16'></div>
                {techIcons.slice(0, 5).map((tech) => (
                  <div
                    key={tech.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group '
                  >
                    <div
                      className={`${getSizeClasses(
                        tech.size
                      )} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={tech.path}
                        alt={tech.name}
                        className='w-full h-full object-contain drop-shadow-lg'
                      />
                    </div>
                    <span className='text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>
                      {tech.name}
                    </span>
                  </div>
                ))}
                <div className='w-16'></div>
              </div>

              {/* Row 2 - 7 items (full row) */}
              <div className='flex items-center justify-center gap-6'>
                {techIcons.slice(5, 12).map((tech) => (
                  <div
                    key={tech.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group '
                  >
                    <div
                      className={`${getSizeClasses(
                        tech.size
                      )} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={tech.path}
                        alt={tech.name}
                        className='w-full h-full object-contain drop-shadow-lg'
                      />
                    </div>
                    <span className='text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 3 - 5 items */}
              <div className='flex items-center justify-center gap-6'>
                <div className='w-16'></div>
                {techIcons.slice(12, 17).map((tech) => (
                  <div
                    key={tech.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group '
                  >
                    <div
                      className={`${getSizeClasses(
                        tech.size
                      )} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={tech.path}
                        alt={tech.name}
                        className='w-full h-full object-contain drop-shadow-lg'
                      />
                    </div>
                    <span className='text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>
                      {tech.name}
                    </span>
                  </div>
                ))}
                <div className='w-16'></div>
              </div>

              {/* Row 4 - 7 items (full row) */}
              <div className='flex items-center justify-center gap-6'>
                {techIcons.slice(17, 24).map((tech) => (
                  <div
                    key={tech.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group '
                  >
                    <div
                      className={`${getSizeClasses(
                        tech.size
                      )} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={tech.path}
                        alt={tech.name}
                        className='w-full h-full object-contain drop-shadow-lg'
                      />
                    </div>
                    <span className='text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 5 - 5 items */}
              <div className='flex items-center justify-center gap-6'>
                <div className='w-16'></div>
                {techIcons.slice(24, 29).map((tech) => (
                  <div
                    key={tech.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group '
                  >
                    <div
                      className={`${getSizeClasses(
                        tech.size
                      )} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={tech.path}
                        alt={tech.name}
                        className='w-full h-full object-contain drop-shadow-lg'
                      />
                    </div>
                    <span className='text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors'>
                      {tech.name}
                    </span>
                  </div>
                ))}
                <div className='w-16'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
