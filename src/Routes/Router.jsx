import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import AllTouristsSpot from '../pages/touristSpot/AllTouristsSpot';
import AddTouristsSpot from '../pages/touristSpot/AddTouristsSpot';
import MyList from '../pages/MyList/MyList';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/all_tourists_spot',
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: '/add_tourists_spot',
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/my_list',
        element: <MyList></MyList>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
