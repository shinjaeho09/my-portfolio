/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6', // 밝은 블루
          600: '#2563eb', // 진한 블루
        },
        accent: {
          500: '#fbbf24', // 포인트 옐로우
        },
        background: '#F8FAFC', // 전체 배경 (밝은 회색)
        section: '#FFFFFF',    // 섹션 배경 (흰색)
        text: '#1E293B',       // 기본 텍스트 (어두운 회색)
        heading: '#0F172A',    // 헤딩용 거의 검정
        button: '#3B82F6',     // 버튼 배경 (밝은 블루)
        'button-hover': '#2563eb', // 버튼 호버 (진한 블루)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
