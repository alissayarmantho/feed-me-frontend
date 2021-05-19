import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer: React.FC = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 1.2966,
    lng: 103.7764,
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
