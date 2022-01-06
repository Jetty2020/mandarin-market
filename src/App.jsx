import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { routes } from './constants';
import { theme, GlobalStyles } from './style/global-css';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
