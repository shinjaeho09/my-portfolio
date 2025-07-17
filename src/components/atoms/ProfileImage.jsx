import React from 'react';

// src/assets/profile.jpg 이미지를 사용하세요. 없으면 아래 경로에 이미지를 추가하세요.
// import profileImage from '../../assets/profile.jpg';

const ProfileImage = ({ 
  src, 
  alt = 'Profile', 
  className = '',
}) => {
  // src가 없으면 profile.jpg를 사용하도록 안내
  // const imageSrc = src || profileImage;
  // 실제 이미지가 없으므로 아래와 같이 주석 처리
  // <img src={imageSrc} ... />
  return (
    // 이미지 경로 여기에 넣으세요: src={src || 'src/assets/profile.jpg'}
    <img
      // src={src || profileImage}
      // 실제 이미지가 없으므로 아래와 같이 주석 처리
      // src={src || require('../../assets/profile.jpg')}
      src={src || ''} // 이미지 경로 여기에 넣으세요
      alt={alt}
      className={`w-36 h-36 rounded-full shadow-md object-cover ${className}`}
    />
  );
};

export default ProfileImage; 