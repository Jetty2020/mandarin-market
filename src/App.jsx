import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { routes } from './constants';
import { theme, GlobalStyles } from './style/global-css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.profile} element={<Profile />} />
              <Route path={routes.chat} element={<Chat />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
