import Image from 'next/image'
import React from 'react'
import AutoSearchComponent from './AutoSearchComponent';
import CountryDropDown from './CountryDropdown';
import { useState } from 'react'

export default function Nav({ setLocation, countryList }) {
   const [Country, setCountry] = useState('MY')
   // console.log("Nav", data);
   return (
      <nav className="navbar navbar-light bg-light ">
         <div className="container-fluid">
            <CountryDropDown countryList = {countryList} setCountry = {setCountry} currentCountry = {Country}/>
            <a className="navbar-brand" href="#">
               <Image src={'/google.png'} width='50px' height='50px' alt='nav' />
            </a>
            <div className="w-50">
               <AutoSearchComponent setLocation={setLocation} country = {Country}/>
            </div>
         </div>
      </nav>
   )
}
