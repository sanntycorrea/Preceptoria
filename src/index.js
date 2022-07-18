
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme';
import App from './App';
import LoginForm from './components/LoginForm';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <app />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);