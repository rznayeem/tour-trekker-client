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
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
          fetch(
            `https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/${params.id}`
          ),
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
          fetch(
            `https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/${params.id}`
          ),
      },
      {
        path: '/DestinationDetails/:country_name',
        element: <DestinationDetails></DestinationDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-tour-trekker-server-side.vercel.app/destinations/${params.country_name}`
          ),
      },
    ],
  },
]);

export default router;
