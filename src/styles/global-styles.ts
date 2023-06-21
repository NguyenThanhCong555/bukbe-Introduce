import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-1: #EC5938;
    --primary-after-1: #f36a4c;
    --whileL: #F3F3F3;
    --shadow: 0px 40px 70px 0px #EC5938;
    --shadow2: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  *,*::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Mulish', sans-serif !important;
    transition: all .3s ease-in;

  }

  *::-webkit-scrollbar {
    width: 0px;
  }
  *::-webkit-scrollbar-thumb {
    width: 0px;
  }
  *::-webkit-scrollbar-track {
    width: 0px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

/* Firefox */
  input[type=number] {
    appearance: textfield;
  }
  
  *{
    transition: all .4s ease-in;
  }

  html,
  body{
    height: 100%;
    width: 100%;
    transition: all .3s ease-in;
  }

  body{
    line-height: 1.3;
    font-family: 'Mulish', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Mulish', sans-serif;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  /*text style*/ 
  .heading_1-bold {
    font-size: 64px;
    font-weight: 700;
  }
  .heading_2-regular {
    font-size: 64px;
    font-weight: 400;
  }
  .heading_3-bold {
    font-size: 48px;
    font-weight: 700;
  }
  .heading_4-medium {
    font-size: 48px;
    font-weight: 500;
  }
  .heading_5-regular {
    font-size: 48px;
    font-weight: 400;
  }
  .title_1-bold {
    font-size: 32px;
    font-weight: 700;
  }
  .title_2-medium {
    font-size: 32px;
    font-weight: 500;
  }
  .title_3-regular {
    font-size: 32px;
    font-weight: 400;
  }
  .subtitle_1-bold {
    font-size: 24px;
    font-weight: 700;
  }
  .subtitle_2-medium {
    font-size: 24px;
    font-weight: 500;
  }
  .subtitle_3-regular {
    font-size: 24px;
    font-weight: 400;
  }
  .subtitle_4-bold {
    font-size: 20px;
    font-weight: 700;
  }
  .body_1-bold {
    font-size: 18px;
    font-weight: 700;
  }
  .body_2-medium {
    font-size: 18px;
    font-weight: 500;
  }
  .body_3-regular {
    font-size: 18px;
    font-weight: 400;
  }
  .body_4-bold {
    font-size: 16px;
    font-weight: 700;
  }
  .body_5-medium {
    font-size: 16px;
    font-weight: 500;
  }
  .body_6-regular {
    font-size: 16px;
    font-weight: 400;
  }
  .small_1-bold {
    font-size: 14px;
    font-weight: 700;
  }
  .small_2-medium {
    font-size: 14px;
    font-weight: 500;
  }
  .small_3-regular {
    font-size: 14px;
    font-weight: 400;
  }
  .small_4-bold {
    font-size: 12px;
    font-weight: 700;
  }
  .small_5-medium {
    font-size: 12px;
    font-weight: 500;
  }
  .small_6-regular {
    font-size: 12px;
    font-weight: 400;
  }
  .small_7-regular {
    font-size: 10px;
    font-weight: 400;
  }
`;
