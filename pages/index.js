import { useState } from 'react'
import Head from 'next/head'
import { LoadScript } from '@react-google-maps/api'
import MapComponent from '../components/MapComponent'
import Nav from '../components/Nav'
import { Dropdown } from "@nextui-org/react";

export default function Home({data}) {
   // console.log(data);
   const [libraries] = useState(['places']);
   const [location, setLocation] = useState({ lat: 3.5, lng: 101.5 })
   const [value, setValue] = useState('')

   return (
      <div>
         <Head>
            <title>Google Map Project</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <LoadScript
               googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
               libraries={libraries}
            >
               <Nav setLocation={setLocation} countryList = {data?.data} />
               <div className="m-2 alert alert-primary text-center" role="alert">
                  {value}
               </div>
               <div className='container-fluid mb-2'>
                  <MapComponent location={location} setValue={setValue} />
               </div>
            </LoadScript>
         </main>
      </div>
   )
}

export async function getServerSideProps() {
   // Fetch data from external API
   const res = await fetch(`https://api.first.org/data/v1/countries`)
   const data = await res.json()
   // console.log(data)
   // Pass data to the page via props
   return { props: { data } }
 }