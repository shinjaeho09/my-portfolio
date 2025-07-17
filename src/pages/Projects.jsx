import React, { useState, useMemo } from 'react';
import Header from '../components/organisms/Header';
import SearchBar from '../components/molecules/SearchBar';
import ProjectCard from '../components/organisms/ProjectCard';
import { projects, profileData } from '../data/projects';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projects;
    
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        profileImage={profileData.profileImage}
        name={profileData.name}
      />
      
      <main className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 프로젝트를 둘러보세요. 검색창을 이용해 기술, 프로젝트명, 설명으로 검색할 수 있습니다.
            </p>
          </div>
          
          <div className="mb-8">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="검색"
              className="max-w-lg mx-auto"
            />
          </div>
          
          {filteredProjects.length > 0 ? (
            <>
              <div className="mb-6 text-center">
                <p className="text-gray-600">
                  Showing {filteredProjects.length} of {projects.length} projects
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search terms or browse all projects.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects; 