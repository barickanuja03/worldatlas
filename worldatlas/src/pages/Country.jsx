import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import { NavLink } from 'react-router-dom';
import { SearchFilter } from '../Components/UI/SearchFilter';
import Loading from '../Components/UI/Loading';

function Country() {
  const [ isPending,startTransition ] = useTransition();
  const [ countries,setCountries ] = useState([]);
  const [search,setSearch] = useState();
  const [filter,setFilter] = useState("all");
  useEffect(() => {
    startTransition(async () =>{
      const res = await getCountryData();
      setCountries(res.data);
    })
    getCountryData();
  },[])
  if(isPending)
    return <Loading />
    const searchCountry = (country) => {
      //search logic
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase())
      }
      else{
        return country;
      }
    }
    const filterRegion = (country) =>{
      //filter logic
      if(filter === "all"){
        return country;
        return country.region === filter;
      }
    };
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))
  return (
    <div>
      <div className='main-container my-9'>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-7">
      {
        filterCountries.map((data) => {
            return(
              <div key={data.id} className='flex flex-col border-2 border-gray-600 shadow-md shadow-slate-500 py-3 px-4 rounded-lg hover:scale-95 ease-in-out duration-300 gap-2'>
                    <img src={data.flags.png} className='w-[20rem] aspect-video text-center' />
                    <h1 className='text-xl font-semibold'>{data.name.common}</h1>
                    <h2><span className='text-red-800'>Capital:</span>&nbsp;&nbsp;{data.capital}</h2>
                    <h2><span className='text-red-800'>Population:</span>&nbsp;&nbsp;{data.population}</h2>
                    <button className='button'><NavLink to={`/country/${data.name.common}`}>Read More</NavLink></button>
                 </div>
             );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Country
