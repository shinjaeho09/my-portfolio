import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import Button from '../atoms/Button';

const AboutSection = ({ 
  profileImage,
  name = 'Your Name',
  title = 'Full Stack Developer',
  introduction = 'Passionate developer with expertise in modern web technologies.',
  vision = 'Creating innovative solutions that make a difference.',
  className = '' 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-8';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <div className={classes}>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0">
          <ProfileImage 
            src={profileImage} 
            alt={name}
            size="xl"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-xl text-primary-600 font-medium mb-4">{title}</p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                {introduction}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">My Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                {vision}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/projects'}
            >
              View My Work
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 