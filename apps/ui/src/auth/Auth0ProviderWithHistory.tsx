import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

const Auth0ProviderWithHistory: FC<PropsWithChildren> = ({ children }) => {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE ?? '';
  const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';

  const navigate = useNavigate();

  const onRedirectCallback: Auth0ProviderOptions['onRedirectCallback'] = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      audience={audience}
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
