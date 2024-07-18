import { useParams } from "react-router-dom";
import { getPropertyById } from "../api";
import { useEffect, useState } from "react";
import { PropertyFace } from "../types";

const PropertyDetails: React.FC = () => {
  const [property, setProperty] = useState<PropertyFace>();
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id as string, 10);

  useEffect(() => {
    getPropertyById(propertyId).then((property) => setProperty(property));
  }, [propertyId]);
  console.log(property);

  if (!property) {
    return <div>Property not found</div>;
  }

  return <div>Property: {property.streetAddress}</div>;
};

export default PropertyDetails;
