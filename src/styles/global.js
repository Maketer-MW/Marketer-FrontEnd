import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    overflow: auto;
    height: 100%;
    /* 전체 배경색은 App 컴포넌트에서 설정 */
    font-size: 1rem;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
    /* 텍스트 색상 변경 */
    margin-bottom: 1rem;
  }

  p {
    /* 텍스트 색상 변경 */
    margin-bottom: 1rem;
  }

  a {
    /* 링크 색상 변경 */
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    /* 링크 hover 색상 변경 */
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    /* 스크롤바 트랙 색상 변경 */
  }

  ::-webkit-scrollbar-thumb {
    /* 스크롤바 색상 변경 */
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    /* 스크롤바 hover 색상 변경 */
  }
`;
