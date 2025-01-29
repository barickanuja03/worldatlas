import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/postApi';
function CountryDetails() {
const params = useParams();
 const [ isPending,startTransition ] = useTransition();
  const [ country,setCountry ] = useState();
  useEffect(() => {
    startTransition(async () =>{
      const res = await getCountryIndData(params.id);
      console.log(res);
      if(res.status === 200)
      {
      setCountry(res.data[0]);
      }
    })
    getCountryIndData();
  },[])
  if(isPending)
    return <h1>Loading...</h1>
console.log(params);
  return (
    <>
         <section className="main-container ">
      <div className="">
        {country && (
          <div className="flex flex-row justify-evenly items-center h-[70vh]">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="p-10 w-[30vw] aspect-video"
            />
            <div className="">
              <h2 className="text-2xl font-bold capitalize"> {country.name.official} </h2>

              <div className="gap-y-3">
                <p>
                  <span className="heading"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="heading"> Population: </span>
                   {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="heading"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="heading"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="heading"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="heading">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="heading"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="heading">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <NavLink to="/country" className="backBtn">
            <button className='button'>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
    </>
  )
}

export default CountryDetails
