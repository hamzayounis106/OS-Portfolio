import { useState } from 'react';
import { projects } from '../data/projects';

interface FinderProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Finder({ onClose, onFocus, zIndex }: FinderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // Use imported projects data
  const categories = [
    'All',
    'MERN',
    'Next Js',
    'WordPress',
    'Shopify',
    'Open Source GNOME',
  ];

  const quickLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/hamzayounis106',
      icon: './Icons/Dock/github-icon.svg',
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/hamzayounis_105',
      icon: './Icons/Dock/fiverr-icon.svg',
    },
    {
      name: 'Upwork',
      url: 'https://upwork.com/freelancers/muhammadhamzay',
      icon: './Icons/Dock/upwork-icon.svg',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.kind === selectedCategory.replace('.js', '');
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div style={{ zIndex: zIndex - 1 }} />

      <div
        className={`fixed inset-0 flex pointer-events-none ${
          isMaximized
            ? 'items-center justify-center'
            : 'items-start justify-center pt-4 sm:pt-7'
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className={`bg-[#ECECEC] shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-400 transition-all duration-300 ${
            isMaximized
              ? 'w-full h-screen rounded-none'
              : 'w-[95vw] sm:w-[900px] h-[90vh] sm:h-[600px] rounded-[12px] mx-2'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header with Search */}
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

              {/* Search Bar */}
              <div className='ml-2 sm:ml-4 flex items-center bg-white rounded-md px-2 sm:px-3 py-1 shadow-inner'>
                <svg
                  className='w-3 h-3 sm:w-4 sm:h-4 text-gray-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search...'
                  className='ml-1.5 sm:ml-2 w-[80px] sm:w-[200px] text-[11px] sm:text-[13px] outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='hidden sm:block flex-1 text-center text-[13px] font-semibold text-gray-700'>
              Projects
            </div>
            <div className='hidden sm:block w-[250px]'></div>
          </div>

          {/* Main Content Area */}
          <div className='flex flex-1 overflow-hidden'>
            {/* Left Sidebar */}
            <div className='w-[140px] sm:w-[200px] bg-[#D9DDE1] border-r border-gray-400 p-2 sm:p-3 flex flex-col gap-3 sm:gap-4 overflow-y-auto'>
              {/* Categories */}
              <div>
                <h3 className='text-[10px] sm:text-[11px] font-semibold text-gray-600 mb-1.5 sm:mb-2 px-1 sm:px-2'>
                  CATEGORIES
                </h3>
                <div className='space-y-0.5 sm:space-y-1'>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-2 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-[13px] transition-colors truncate ${
                        selectedCategory === category
                          ? 'bg-[#4A90E2] text-white'
                          : 'text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                      }`}
                    >
                      📁 {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className='text-[10px] sm:text-[11px] font-semibold text-gray-600 mb-1.5 sm:mb-2 px-1 sm:px-2'>
                  QUICK LINKS
                </h3>
                <div className='space-y-0.5 sm:space-y-1'>
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1.5 sm:gap-2 w-full text-left px-2 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-[13px] text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition-colors'
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-contain flex-shrink-0'
                      />
                      <span className='truncate'>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area - Project List */}
            <div className='flex-1 bg-white overflow-hidden flex flex-col'>
              {/* Column Headers */}
              <div className='h-[28px] sm:h-[32px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-b border-gray-300 flex items-center px-3 sm:px-4 text-[10px] sm:text-[11px] font-semibold text-gray-600'>
                <div className='w-[60%]'>Name</div>
                <div className='w-[40%]'>Category</div>
              </div>

              {/* Project List */}
              <div className='flex-1 overflow-y-auto'>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      onDoubleClick={() => {
                        if (project.liveLink) {
                          window.open(
                            project.liveLink,
                            '_blank',
                            'noopener,noreferrer'
                          );
                        }
                      }}
                      className={`flex items-center px-3 sm:px-4 py-2 sm:py-2.5 border-b border-gray-200 cursor-pointer transition-colors ${
                        selectedProject === project.id
                          ? 'bg-[#4A90E2] text-white'
                          : 'hover:bg-gray-100 active:bg-gray-200'
                      }`}
                    >
                      <div className='w-[60%] text-[11px] sm:text-[13px] font-medium truncate'>
                        📄 {project.name}
                      </div>
                      <div className='w-[40%] text-[11px] sm:text-[13px] truncate'>
                        {project.kind}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='flex items-center justify-center h-full text-gray-500 text-[12px] sm:text-[14px]'>
                    No projects found
                  </div>
                )}
              </div>

              {/* Project Details Footer with Image */}
              {selectedProject && (
                <div className='h-[140px] sm:h-[180px] border-t-2 border-gray-300 bg-[#F7F7F7] p-2 sm:p-4 overflow-y-auto'>
                  {filteredProjects
                    .filter((p) => p.id === selectedProject)
                    .map((project) => (
                      <div
                        key={project.id}
                        className='flex gap-2 sm:gap-4 h-full'
                      >
                        {/* Project Image */}
                        <div className='w-[150px] sm:w-[250px] h-full rounded-lg overflow-hidden bg-gray-200 flex-shrink-0'>
                          <img
                            src={project.image}
                            alt={project.name}
                            className='w-full h-full object-cover object-top'
                          />
                        </div>
                        {/* Project Info */}
                        <div className='flex-1 flex flex-col'>
                          <h3 className='text-[12px] sm:text-[14px] font-semibold text-gray-800 mb-1.5 sm:mb-2'>
                            {project.name}
                          </h3>
                          <p className='text-[10px] sm:text-[12px] text-gray-600 mb-1.5 sm:mb-2 line-clamp-3'>
                            {project.description}
                          </p>
                          <a
                            href={project.liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-[10px] sm:text-[11px] text-blue-600 hover:underline mt-auto'
                          >
                            🔗 Visit Website
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finder;
