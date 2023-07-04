import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => {
   toast.error('Oops! We can\'t find this place on the map. Try a different keyword.', {id: "123"})
};

export default function AutoSearchComponent({ setLocation }) {
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
      } else {
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
               // componentRestrictions: { country: "ca" },
            }}
         >
            <input className="form-control me-2" type="search" placeholder="Search places" aria-label="Search" />
         </Autocomplete >
         <Toaster />
      </div>
   )
}

{/*<Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            style={{ width: "90%" }}
            onPlaceSelected={(place) => {
                console.log(place);
            }}
            options={{
                types: ["(regions)"],
                componentRestrictions: { country: "ca" },
            }}
            libraries={["places"]}
/>*/}
