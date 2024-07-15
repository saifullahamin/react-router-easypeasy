import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='App'>
      <Header title='React JS Blog' />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
