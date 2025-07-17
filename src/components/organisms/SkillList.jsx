import React from 'react';
import Tag from '../atoms/Tag';

const SkillList = ({ 
  skills = [], 
  title = 'Skills & Technologies',
  className = '' 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6';
  const classes = `${baseClasses} ${className}`;
  
  // 사용자 요청에 따라 카테고리 및 기술을 수정
  const skillCategories = {
    'Frontend': ['React', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'Express.js'],
    'Database': ['MySql'],
    'DevOps': ['Git', 'GitHub'],
    'Tools': ['VS Code']
  };
  
  const getVariantForSkill = (skill, category) => {
    if (category === 'Frontend') return 'blue';
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('react')) return 'purple';
    if (skillLower.includes('node') || skillLower.includes('express')) return 'success';
    if (skillLower.includes('mysql')) return 'warning';
    if (skillLower.includes('git')) return 'danger';
    if (skillLower.includes('vs code')) return 'gray';
    if (skillLower.includes('tailwind')) return 'purple';
    return 'default';
  };
  
  // 카테고리별 테두리 색상 매핑
  const borderColorByCategory = {
    'Frontend': 'border-gray-300',
    'Backend': 'border-lime-400',
    'Database': 'border-yellow-700',
    'DevOps': 'border-red-700',
    'Tools': 'border-gray-500',
  };
  
  // 카테고리별 ring(아우라) 색상 매핑
  const ringColorByCategory = {
    'Frontend': 'ring-blue-200',
    'Backend': 'ring-lime-200',
    'Database': 'ring-yellow-700',
    'DevOps': 'ring-red-700',
    'Tools': 'ring-gray-400',
  };
  
  return (
    <div className={classes}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      {Object.entries(skillCategories).map(([category, categorySkills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              <Tag
                key={skill}
                variant={getVariantForSkill(skill, category)}
                size="md"
                className={`cursor-pointer hover:scale-105 transition-transform duration-200 ${borderColorByCategory[category]} ${ringColorByCategory[category]}`}
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList; 