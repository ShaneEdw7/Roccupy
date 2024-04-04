import RowHouses from "../assets/images/jellybeanrowtest.jpg";

const PropertyCard = () => {
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src={RowHouses} alt='Property Image' className='rounded-xl' />
        </figure>
        <div className='card-body items-end text-center'>
          <h2 className='card-title'>Property</h2>
          <p></p>
          <div className='card-actions'>
            <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
