import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => { // Let's the user know that their selected location is invalid via a Toast
   toast.error('Oops! We can\'t find this place on the map. Try a different keyword.', {id: "123"})
};

export default function AutoSearchComponent({ setLocation, country }) {
   // console.log("AutoSearchComponent", countryList);
   const [autoCom, setAutoCom] = useState()

   const onLoad = (autocomplete) => {
      setAutoCom(autocomplete)
   }

   const onPlaceChanged = () => {
      const place = autoCom?.getPlace();
      const geometry = place?.geometry;
      if (geometry) {
         const lat = place.geometry.location.lat();
         const lon = place.geometry.location.lng();
         setLocation({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() })
         console.log('Get place', lat, lon)
      } else { // handles the event when the geometry of a location cannot be worked out
         console.log('Autocomplete is not loaded yet!');
         notify();
      }
   }
   return (
      <div>
         < Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            options={{
               types: ["establishment"],
               componentRestrictions: { country: country },
            }}
         >
            <input className="form-control me-2" type="search" placeholder="Search places" aria-label="Search" />
         </Autocomplete >
         <Toaster />
      </div>
   )
}
