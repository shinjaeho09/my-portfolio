import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import NavLinks from '../molecules/NavLinks';
import { profileData } from '../../data/projects';

const Header = ({ profileImage, name = 'Your Name', className = '' }) => {
  const baseClasses = 'bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <header className={classes}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{name}</h1>
              <p className="text-sm text-gray-600">{profileData.title}</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <NavLinks />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 