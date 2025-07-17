import React, { useState, useMemo } from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import SkillList from '../components/organisms/SkillList';
import SearchBar from '../components/molecules/SearchBar';
import ProjectCard from '../components/organisms/ProjectCard';
import { projects, profileData } from '../data/projects';

const Home = () => {
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
    <div className="min-h-screen bg-background">
      <Header 
        profileImage={profileData.profileImage}
        name={profileData.name}
      />
      
      <main>
        {/* Hero Section */}
        <section className="section bg-section">
          <div className="container">
            <AboutSection 
              profileImage={profileData.profileImage}
              name={profileData.name}
              title={profileData.title}
              introduction={profileData.introduction}
              vision={profileData.vision}
            />
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="section bg-primary-500">
          <div className="container">
            <SkillList skills={profileData.skills} />
          </div>
        </section>
        {/* Projects Section 삭제 */}
        {/* Footer */}
        <footer className="bg-section py-8 mt-12 border-t border-primary-600">
          <div className="container text-center">
            <p className="text-heading text-lg font-semibold mb-2">Contact</p>
            <p className="text-text">Email: sinj42907@gmail.com</p>
            <p className="text-text">Phone: 010-1234-5678</p>
            <p className="text-accent text-sm mt-4">© 2025 신재호. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home; 