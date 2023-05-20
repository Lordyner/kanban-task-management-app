import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    @font-face {
      font-family: PlusJakartaSans;
      src: url('../public/fonts/static/PlusJakartaSans-Medium.ttf');
    }
    font-family: PlusJakartaSans;
}


  .empty-board {
    font-family: PlusJakartaSans;
    font-size: variables.$heading-300;
    line-height: 1.188rem;
    font-weight: bold;
    color: variables.$grey-400;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    gap: 25px;
    justify-content: center;
  }

  button {
    &.primary {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: variables.$purple-400;
      border: none;
      border-radius: 24px;
      padding: 10px 18px 10px 18px;
      cursor: pointer;
      color: #fff;
      width: fit-content;

      &:disabled {
        background-color: variables.$purple-300;
        cursor: not-allowed;
      }
    }
  }

  .main-container {
    background-color: ${({ theme }) => theme.colors.grey200};
    padding: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-width: 750px;
    gap: 2rem;
    padding-top: 5rem;
  }


`
export const lightTheme = {
  body: '#F4F7FD',
  text: '#000112',
  button: {
    background: '',
    fontColor: ''
  },
  header: {
    background: '#fff'
  },
  colors: {
    grey400: 'hsl(216, 15%, 57%)',
    grey300: 'hsl(221, 69%, 94%)',
    grey200: 'hsl(220, 69%, 97%)',
    purple400: 'hsl(242, 48%, 58%)',
    purple300: 'hsl(243, 100%, 82%)',
    primary: '#F4F7FD',
    secondary: '#fff'
  },
  heading500: '1.5rem',
  heading400: '1.125rem',
  heading300: '0.938rem',
  heading200: '0.75rem',

  body500: '0.813rem',
  body400: '0.75rem'

}
export const darkTheme = {
  body: '#20212C',
  text: '#fff',
  button: {
    background: '',
    fontColor: ''
  },
  header: {
    background: '#2B2C37'
  },
  colors: {
    grey400: 'hsl(216, 15%, 57%)', // #828FA3
    grey300: 'hsl(221, 69%, 94%)',
    grey200: 'hsl(220, 69%, 97%)',
    purple400: 'hsl(242, 48%, 58%)',
    purple300: 'hsl(243, 100%, 82%)',
    primary: '#20212C',
    secondary: '#2B2C37'
  },

  heading500: '1.5rem',
  heading400: '1.125rem', //heading-l
  heading300: '0.938rem', //heading-m
  heading200: '0.75rem', //heading-s

  body500: '0.813rem', // body-l
  body400: '0.75rem'
}