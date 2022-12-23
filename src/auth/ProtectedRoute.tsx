import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../components';

export default withAuthenticationRequired(() => <Outlet />, { onRedirecting: () => <Loading /> });
