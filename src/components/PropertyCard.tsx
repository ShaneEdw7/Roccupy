import RowHouses from "../assets/images/jellybeanrowtest.jpg";

const PropertyCard = () => {
  return (
    <div>
      <div className='card lg:w-96 bg-base-100 shadow-xl'>
        <figure className='px-4 pt-4'>
          <img src={RowHouses} alt='Property Image' className='rounded-xl' />
        </figure>
        <div className='card-body text-center grid grid-cols-2 items-end justify-items-center'>
          <div>
            <h2 className='card-title'>123 Evergreen Terrace</h2>
          </div>
          <div>
            <p>Property Info 1</p>
            <p>Property Info 2</p>
            <p>Property Info 3</p>
          </div>
          <div>Additional Info</div>
          <div className='card-actions'>
            <button className='btn btn-primary w-24'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
