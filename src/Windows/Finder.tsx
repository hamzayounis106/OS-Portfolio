import { useState } from 'react';
import { projects } from '../data/projects';

interface FinderProps {
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Finder({ onClose, onFocus, zIndex }: FinderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // Use imported projects data
  const categories = ['All Projects', 'MERN Stack', 'WordPress'];

  const quickLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
    { name: 'Fiverr', url: 'https://fiverr.com/yourusername', icon: '💼' },
    {
      name: 'Upwork',
      url: 'https://upwork.com/freelancers/~yourusername',
      icon: '💚',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All Projects' || project.kind === selectedCategory;
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
            : 'items-start justify-center pt-7'
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div
          className={`bg-[#ECECEC] shadow-2xl pointer-events-auto flex flex-col overflow-hidden border border-gray-400 transition-all duration-300 ${
            isMaximized
              ? 'w-full h-screen rounded-none'
              : 'w-[900px] h-[600px] rounded-[12px]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header with Search */}
          <div className='h-[52px] bg-gradient-to-b from-[#E8E8E8] to-[#D1D1D1] border-b border-gray-400 flex items-center px-4 justify-between'>
            <div className='flex items-center gap-3'>
              {/* Traffic Light Buttons */}
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

              {/* Search Bar */}
              <div className='ml-4 flex items-center bg-white rounded-md px-3 py-1 shadow-inner'>
                <svg
                  className='w-4 h-4 text-gray-500'
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
                  placeholder='Search projects...'
                  className='ml-2 w-[200px] text-[13px] outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='flex-1 text-center text-[13px] font-semibold text-gray-700'>
              Projects
            </div>
            <div className='w-[250px]'></div>
          </div>

          {/* Main Content Area */}
          <div className='flex flex-1 overflow-hidden'>
            {/* Left Sidebar */}
            <div className='w-[200px] bg-[#D9DDE1] border-r border-gray-400 p-3 flex flex-col gap-4'>
              {/* Categories */}
              <div>
                <h3 className='text-[11px] font-semibold text-gray-600 mb-2 px-2'>
                  CATEGORIES
                </h3>
                <div className='space-y-1'>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-1.5 rounded text-[13px] transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#4A90E2] text-white'
                          : 'text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      📁 {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className='text-[11px] font-semibold text-gray-600 mb-2 px-2'>
                  QUICK LINKS
                </h3>
                <div className='space-y-1'>
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 w-full text-left px-3 py-1.5 rounded text-[13px] text-gray-700 hover:bg-gray-300 transition-colors'
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area - Project List */}
            <div className='flex-1 bg-white overflow-hidden flex flex-col'>
              {/* Column Headers */}
              <div className='h-[32px] bg-gradient-to-b from-[#F7F7F7] to-[#ECECEC] border-b border-gray-300 flex items-center px-4 text-[11px] font-semibold text-gray-600'>
                <div className='w-[50%]'>Name</div>
                <div className='w-[25%]'>Kind</div>
                <div className='w-[25%]'>Date Created</div>
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
                      className={`flex items-center px-4 py-2.5 border-b border-gray-200 cursor-pointer transition-colors ${
                        selectedProject === project.id
                          ? 'bg-[#4A90E2] text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className='w-[50%] text-[13px] font-medium truncate'>
                        📄 {project.name}
                      </div>
                      <div className='w-[25%] text-[13px]'>{project.kind}</div>
                      <div className='w-[25%] text-[13px]'>
                        {project.dateCreated}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='flex items-center justify-center h-full text-gray-500 text-[14px]'>
                    No projects found
                  </div>
                )}
              </div>

              {/* Project Details Footer */}
              {selectedProject && (
                <div className='h-[120px] border-t-2 border-gray-300 bg-[#F7F7F7] p-4 overflow-y-auto'>
                  {filteredProjects
                    .filter((p) => p.id === selectedProject)
                    .map((project) => (
                      <div key={project.id}>
                        <h3 className='text-[14px] font-semibold text-gray-800 mb-2'>
                          {project.name}
                        </h3>
                        <p className='text-[12px] text-gray-600 mb-2'>
                          {project.description}
                        </p>
                        <div className='flex gap-2 flex-wrap'>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className='text-[11px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full'
                            >
                              {tag}
                            </span>
                          ))}
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
