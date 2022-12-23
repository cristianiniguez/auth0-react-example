import { Route, Routes } from 'react-router-dom';

import { NavBar, Footer, Loading } from './components';
import { Home, Profile, ExternalApi } from './views';

import './app.css';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/ProtectedRoute';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <div id='app' className='d-flex flex-column h-100'>
      <NavBar />
      <div className='container flex-grow-1'>
        <div className='mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/external-api' element={<ExternalApi />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
