import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routing/AppRouter";
import { theme } from "./theming/defaultTheme";
import { store } from "./redux/store";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
