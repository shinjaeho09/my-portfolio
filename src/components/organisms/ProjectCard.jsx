import React from 'react';
import Tag from '../atoms/Tag';
import Button from '../atoms/Button';

const ProjectCard = ({ 
  project, 
  className = '' 
}) => {
  const { 
    id, 
    title, 
    description, 
    image, 
    techStack, 
    liveUrl, 
    githubUrl, 
    featured = false 
  } = project;
  
  const baseClasses = 'card overflow-hidden';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <div className={`${classes} flex flex-col`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Tag variant="success" size="sm">Featured</Tag>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Tag key={index} variant="default" size="sm">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3 mt-auto">
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => liveUrl && window.open(liveUrl, '_blank')}
            className="flex-1"
            disabled={!liveUrl}
          >
            Live Demo
          </Button>
          {githubUrl && (
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex-1"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 