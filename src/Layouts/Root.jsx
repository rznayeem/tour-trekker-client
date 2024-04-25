import { Outlet } from 'react-router-dom';
import Nav from '../Common/Nav/Nav';
import Footer from '../Common/Footer/Footer';

const Root = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
