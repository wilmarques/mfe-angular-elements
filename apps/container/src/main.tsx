import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/app';
import Home from './app/home';
import MfeContainer from './app/mfe-container';
import Profile from './app/profile';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contacts" element={<MfeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.body
);
