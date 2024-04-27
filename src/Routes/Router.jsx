import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import AllTouristsSpot from '../pages/touristSpot/AllTouristsSpot';
import AddTouristsSpot from '../pages/touristSpot/AddTouristsSpot';
import MyList from '../pages/MyList/MyList';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ViewDetails from '../pages/ViewDetails/ViewDetails';
import UpdateSpotDetails from '../pages/UpdateSpotDetails/UpdateSpotDetails';
import DestinationDetails from '../pages/DestinationDetails/DestinationDetails';
import PrivateRoute from './PrivateRoute';

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
        loader: () => fetch('http://localhost:5000/allTouristsSpot'),
      },
      {
        path: '/add_tourists_spot',
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/my_list',
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateSpotDetails/:id',
        element: <UpdateSpotDetails></UpdateSpotDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allTouristsSpot/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allTouristsSpot/${params.id}`),
      },
      {
        path: '/DestinationDetails/:country_name',
        element: <DestinationDetails></DestinationDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/destinations/${params.country_name}`),
      },
    ],
  },
]);

export default router;
