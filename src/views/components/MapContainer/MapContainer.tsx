import React from "react";
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
    <LoadScript
      googleMapsApiKey={process.env?.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
