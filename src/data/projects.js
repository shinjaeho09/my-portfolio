export const projects = [
  {
    id: 1,
    title: '쇼핑몰 웹사이트 제작',
    description: 'React와 TailwindCSS를 활용해 직관적인 디자인을 적용한 쇼핑몰 사이트입니다.',
    image: 'src/assets/shop.jpg', // 쇼핑몰 웹사이트 이미지를 여기에 넣으세요
    techStack: ['React', 'TailwindCSS'],
    liveUrl: '', // 프로젝트 바로가기 링크가 없으므로 빈 문자열
    githubUrl: '',
    featured: true
  },
  {
    id: 2,
    title: '실시간 날씨 확인 앱',
    description: 'OpenWeather API를 이용해 언제 어디서든 날씨 정보를 빠르게 확인할 수 있는 웹앱입니다. 사용자의 편의성을 고려한 깔끔한 인터페이스가 특징입니다.',
    image: 'src/assets/weather.jpg', // 여기에 weather.jpg 이미지를 넣으세요
    techStack: ['JavaScript', 'OpenWeather API'],
    liveUrl: 'https://shinjaeho09.github.io/weather-app/',
    githubUrl: '',
    featured: false
  }
];

export const profileData = {
  name: '신재호',
  title: '도전을 즐기며 끊임없이 성장하는 개발자',
  profileImage: 'src/assets/profile.jpg', // 프로필 이미지를 여기에 넣으세요
  introduction: '매일 새로운 기술을 배우고, 성장하고 있습니다.',
  vision: '사용자 중심의 서비스와 효율적인 시스템을 모두 이해하는 개발자가 되는 것이 목표입니다.',
  skills: [
    'JavaScript', 'React', 'TailwindCSS', 'Vite', 'Git', 'GitHub', 'Zustand'
  ]
};

export const contactInfo = {
  email: 'sinj42907@gmail.com',
  phone: '010-1234-5678',
  location: 'Uiseong, Korea',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/shinjaeho09',
  twitter: 'https://twitter.com/'
}; 