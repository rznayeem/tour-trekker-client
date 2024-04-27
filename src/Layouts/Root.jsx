import { Outlet } from 'react-router-dom';
import Nav from '../Common/Nav/Nav';
import Footer from '../Common/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos';

const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
