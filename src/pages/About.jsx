import React from 'react';
import Header from '../components/organisms/Header';
import ProfileImage from '../components/atoms/ProfileImage';
import Tag from '../components/atoms/Tag';
import { profileData } from '../data/projects';

const learnedList = [
  {
    title: '개발 환경 & 협업',
    icon: '🛠️',
    details: [
      'Git & GitHub을 이용한 협업 및 PR 리뷰 경험',
      'Markdown 문법 활용, GitHub Projects로 업무 관리',
      'Notion, Velog 등을 통한 문서화 습관',
    ],
  },
  {
    title: 'JavaScript 심화',
    icon: '📚',
    details: [
      '최신 ES6+ 문법 (let/const, 화살표 함수, 구조 분해, 스프레드 등)',
      '클래스, 모듈, 비동기 처리 (Promise, async/await) 개념 이해',
      'DOM 조작 및 간단한 Node.js 웹 서버 구현',
    ],
  },
  {
    title: 'HTML/CSS & React 기본기',
    icon: '💡',
    details: [
      '웹 페이지 구조를 위한 HTML 시맨틱 태그',
      'CSS Flexbox, Box Model을 이용한 레이아웃 설계',
      'React 기본 개념 (컴포넌트, Props, useState) 습득',
      '기본 컴포넌트 (Counter, Toggle, Form 등) 직접 구현',
    ],
  },
  {
    title: '라우팅 및 UI 설계',
    icon: '🧩',
    details: [
      'React Router v6를 사용한 다중 페이지 SPA 구현',
      'Atomic Design 패턴 기반의 컴포넌트 설계 구조 경험',
      'TailwindCSS와 Styled-components 등 다양한 스타일링 방식 비교 및 적용',
    ],
  },
  {
    title: 'Hooks & API 연동',
    icon: '🔗',
    details: [
      'Custom Hooks와 useEffect, useRef, useContext 활용',
      'REST API 연동 및 Mock Service Worker (MSW)를 통한 테스트 환경 구축',
      'useLocalStorage, 테마 전환 등 다양한 기능 실습',
    ],
  },
  {
    title: '상태 관리 & 최적화',
    icon: '⚡',
    details: [
      'Zustand를 활용한 전역 상태 관리',
      'TanStack Query로 API 상태 관리, 캐싱 및 에러 처리',
      '폼 관리 및 웹 접근성, React Hook Form (RHF) 적용',
    ],
  },
  {
    title: 'AI 기반 개발 & 배포 자동화',
    icon: '🤖',
    details: [
      'cursor 등을 활용한 코딩 생산성 향상',
      'GitHub Actions 기반 CI/CD 파이프라인 구축 경험',
      '환경변수 관리, GitHub Pages 배포 실습',
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        profileImage={profileData.profileImage}
        name={profileData.name}
      />
      <main className="section">
        <div className="container">
          {/* 내가 배운 것들 Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">내가 배운 것들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learnedList.map((item, idx) => (
                <div key={item.title} className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 