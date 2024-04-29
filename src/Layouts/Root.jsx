import { Outlet } from 'react-router-dom';
import Nav from '../Common/Nav/Nav';
import Footer from '../Common/Footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Root = () => {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, []);

  return (
    <>
      <div className="font-recursive">
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
