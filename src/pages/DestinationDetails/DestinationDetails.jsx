import { useLoaderData } from 'react-router-dom';

const DestinationDetails = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      {loaderData.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default DestinationDetails;
