import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import { MdSystemUpdateAlt } from 'react-icons/md';

const MyList = () => {
  const { user } = useContext(AuthContext) || {};

  const [myTouristsSpot, setMyTouristsSpot] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyTouristsSpot(data);
      });
  }, [user]);

  const handleDelete = email => {
    fetch(`http://localhost:5000/myList/${email}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <div className="container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <tr
                key={idx}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.country_name}
                </th>
                <td className="px-6 py-4">{item?.location}</td>
                <td className="px-6 py-4">{item?.travel_time}</td>
                <td className="px-6 py-4">{item?.cost}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user?.email)}
                    className="btn btn-error mr-5"
                  >
                    Delete
                    <MdDeleteForever />
                  </button>
                  <button className="btn btn-success">
                    Update
                    <MdSystemUpdateAlt />
                  </button>
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
