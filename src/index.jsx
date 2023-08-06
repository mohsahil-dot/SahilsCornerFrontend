import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-61yyfq5tuvlqq7xu.us.auth0.com"
    clientId="7BrRMAW7hUSM2Wcs1VEEFhC9yNs603U2"
    authorizationParams={{
      redirect_uri: `https://sahilscorner.netlify.app`
    }}
  >
  <StrictMode>
    <App />
    </StrictMode>
    </Auth0Provider>,
);
