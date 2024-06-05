import { useParams } from "react-router-dom";
import { getPropertyById } from "../api";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id as string, 10);
  const property = getPropertyById(propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  return <div>Property: {property.streetAddress}</div>;
};

export default PropertyDetails;
