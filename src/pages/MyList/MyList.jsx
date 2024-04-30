import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import { MdSystemUpdateAlt } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyList = () => {
  const { user } = useContext(AuthContext) || {};

  const [myTouristsSpot, setMyTouristsSpot] = useState([]);
  console.log(myTouristsSpot);

  useEffect(() => {
    fetch(
      `https://assignment-10-tour-trekker-server-side.vercel.app/myList/${user?.email}`
    )
      .then(res => res.json())
      .then(data => {
        setMyTouristsSpot(data);
      });
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaining = myTouristsSpot.filter(item => item._id !== id);
              setMyTouristsSpot(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Tour Trekker | Your List</title>
      </Helmet>
      <div className="container h-[90vh] pt-20 mx-auto relative overflow-x-auto sm:rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                Country name
              </th>
              <th scope="col" className="px-6 py-3">
                Place
              </th>
              <th scope="col" className="px-6 py-3">
                Total Trip Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Average Cost
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myTouristsSpot.map((item, idx) => (
              <tr key={idx} className="hover">
                <th scope="row" className="">
                  {item.country_name}
                </th>
                <td className="px-6 py-4">{item?.location}</td>
                <td className="px-6 py-4">{item?.travel_time}</td>
                <td className="px-6 py-4">{item?.cost}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error mr-5"
                  >
                    Delete
                    <MdDeleteForever />
                  </button>
                  <Link
                    to={`/updateSpotDetails/${item._id}`}
                    className="btn btn-success"
                  >
                    Update
                    <MdSystemUpdateAlt />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
