import { useCallback, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import Search from "../Search/Search";
import ReCenter from "../ReCenter/ReCenter";

import "./RegistrationForm.css";

const mapContainerStyles = {
  width: "400px",
  height: "400px",
  margin: "10px 0",
};
const center = {
  lat: 40,
  lng: -79,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const defaultRegistrationFields = {
  name: "",
  address: "",
  contact: "",
  email: "",
  coordinates: center,
};

const RegistrationForm = () => {
  const [registration, setRegistration] = useState(defaultRegistrationFields);
  const { name,password,  email,phone, coordinates } = registration;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post("http://127.0.0.1:8000/api/addusers",registration)
   .then(response=>{
    console.log(response);
    console.log(registration);
   })
  };

  const onMapClick = useCallback(
    (event) => {
      setRegistration({
        ...registration,
        coordinates: {
          lat: parseFloat(event.latLng.lat()),
          lng: parseFloat(event.latLng.lng()),
        },
      });
    },
    [registration]
  );

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => (mapRef.current = map), []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const setAddress = useCallback(
    ({ address, coordinates }) => {
      setRegistration({ ...registration, address, coordinates });
    },
    [registration]
  );
  

  return (
    <div className="registration-form-container">
      <h3>Register your Business</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of your Business</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={name}
              required
            />
          </div>
        </div>

        

        <div>
          <label htmlFor="email">Email address</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
            />
          </div>
        </div>
        <div>
          <label >Enter Your Password</label>
          <div>
            <input
              
              name="password"
              id="password"
              onChange={handleChange}
              value={password}
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <div>
            <input
              type="text"
              name="phone"
              id="contact"
              onChange={handleChange}
              value={phone}
            />
          </div>
        </div>

        <div>
          <label >Address</label>
          <div className="map-container">
            <Search panTo={panTo} setAddress={setAddress} />

            <GoogleMap
              mapContainerStyle={mapContainerStyles}
              zoom={8}
              center={coordinates}
              onLoad={onMapLoad}
              options={options}
              onClick={onMapClick}
            >
              <Marker position={registration.coordinates} />
            </GoogleMap>

            <ReCenter panTo={panTo} />
          </div>
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
