import * as api from "../api";
import RowHouses from "../assets/images/jellybeanrowtest.jpg";
import { PropertyFace } from "../types";

const PropertyCard = () => {
  /*
  ** This works with one property in Storage ** 

  const propertyString = localStorage.getItem("propertiesStorage");
  const property = JSON.parse(propertyString);
  console.log(property);
*/
  async function processData() {
    const properties = await api.getProperties();
    if (properties) {
      const propertyObjects = [];
      properties.forEach((property) => {
        const newObject = { ...property };
        propertyObjects.push(newObject);
      });
      console.log(propertyObjects);
    } else {
      console.log("No properties found.");
    }
  }
  processData();

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
            <p>Rent: {property.rent}</p>
            <p>
              Tenants: {property.tenant1} {property.tenant2}
            </p>
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
