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
import ChatRoom from './pages/ChatRoom';
import NotFound from './pages/NotFound';
import store from './redux/store';
import LoginEmail from './pages/LoginEmail';
import Join from './pages/Join';
import Upload from './pages/Upload';
import UploadEdit from './pages/UploadEdit';
import Following from './pages/Following';
import Follower from './pages/Follower';
import Product from './pages/Product';
import ProductEdit from './pages/ProductEdit';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path={routes.following} element={<Following />} />
              <Route path={routes.follower} element={<Follower />} />
              <Route path={routes.ownProfile} element={<Profile />} />
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.profile} element={<Profile />} />
              <Route path={routes.ownProfile} element={<Profile />} />
              <Route path={routes.chat} element={<Chat />} />
              <Route path={routes.chatRoom} element={<ChatRoom />} />
              <Route path={routes.loginEmail} element={<LoginEmail />} />
              <Route path={routes.join} element={<Join />} />
              <Route path={routes.upload} element={<Upload />} />
              <Route path={routes.uploadEdit} element={<UploadEdit />} />
              <Route path={routes.product} element={<Product />} />
              <Route path={routes.productEdit} element={<ProductEdit />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
