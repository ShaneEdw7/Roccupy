import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { PropertyFace } from "../types";
import * as api from "../api";
import { useNavigate } from "react-router-dom";

const PropertiesPage = () => {
  const [properties, setProperties] = useState<PropertyFace[]>([]);
  const navigate = useNavigate();

  const getProperties = () => {
    api.getProperties().then((data: PropertyFace[]) => {
      setProperties(data);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <div className='flex flex-col my-3'>
        <div className='flex justify-end p-4'>
          <button
            className='btn'
            // onClick={() =>
            //   document.getElementById("PropertyInputForm").showModal()
            // }
            onClick={() => navigate("../PropertyInputForm")}
          >
            Add Property
          </button>
        </div>
      </div>
      <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-4 my-4'>
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
