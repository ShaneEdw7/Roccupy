import RowHouses from "../assets/images/jellybeanrowtest.jpg";
import { PropertyFace } from "../types";

interface PropertyCardProps {
  property: PropertyFace;
}

const PropertyCard: React.FC<PropertyCardProps> = (props) => {
  const property = props.property;

  return (
    <div>
      <div className='card lg:w-96 bg-base-100 shadow-xl'>
        <figure className='px-4 pt-4'>
          <img src={RowHouses} alt='Property Image' className='rounded-xl' />
        </figure>
        <div className='card-body text-center grid grid-cols-2 items-end justify-items-center'>
          <div>
            <h2 className='card-title'>
              {property.streetNumber} {property.streetAddress}
            </h2>
            <p>{property.city}</p>
          </div>
          <div>
            <p>Rent: {property.rent1}</p>
            <p>Property Type: {property.propertytype}</p>
          </div>
          <div>{property.id}</div>
          <div className='card-actions'>
            <button className='btn btn-primary w-24'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
