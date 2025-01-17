import React from 'react'
import country from "@/pages/api/country.json"
function Country() {
 const country = [
    {
        "id": 1,
        "countryName": "United States",
        "capital": "Washington, D.C.",
        "population": 331002651,
        "flagImageUrl": "https://flagcdn.com/us.svg"
    },
    {
        "id": 2,
        "countryName": "Canada",
        "capital": "Ottawa",
        "population": 37742154,
        "flagImageUrl": "https://flagcdn.com/ca.svg"
    },
    {
        "id": 3,
        "countryName": "Mexico",
        "capital": "Mexico City",
        "population": 128932753,
        "flagImageUrl": "https://flagcdn.com/mx.svg"
    },
    {
        "id": 4,
        "countryName": "Brazil",
        "capital": "Brasília",
        "population": 212559417,
        "flagImageUrl": "https://flagcdn.com/br.svg"
    },
    {
        "id": 5,
        "countryName": "Argentina",
        "capital": "Buenos Aires",
        "population": 45195774,
        "flagImageUrl": "https://flagcdn.com/ar.svg"
    },
    {
        "id": 6,
        "countryName": "United Kingdom",
        "capital": "London",
        "population": 67886011,
        "flagImageUrl": "https://flagcdn.com/gb.svg"
    },
    {
        "id": 7,
        "countryName": "France",
        "capital": "Paris",
        "population": 65273511,
        "flagImageUrl": "https://flagcdn.com/fr.svg"
    },
    {
        "id": 8,
        "countryName": "Germany",
        "capital": "Berlin",
        "population": 83783942,
        "flagImageUrl": "https://flagcdn.com/de.svg"
    },
    {
        "id": 9,
        "countryName": "Italy",
        "capital": "Rome",
        "population": 60461826,
        "flagImageUrl": "https://flagcdn.com/it.svg"
    },
    {
        "id": 10,
        "countryName": "Spain",
        "capital": "Madrid",
        "population": 46754778,
        "flagImageUrl": "https://flagcdn.com/es.svg"
    },
    {
        "id": 11,
        "countryName": "Australia",
        "capital": "Canberra",
        "population": 25499884,
        "flagImageUrl": "https://flagcdn.com/au.svg"
    },
    {
        "id": 12,
        "countryName": "New Zealand",
        "capital": "Wellington",
        "population": 4822233,
        "flagImageUrl": "https://flagcdn.com/nz.svg"
    },
    {
        "id": 13,
        "countryName": "Japan",
        "capital": "Tokyo",
        "population": 126476461,
        "flagImageUrl": "https://flagcdn.com/jp.svg"
    },
    {
        "id": 14,
        "countryName": "China",
        "capital": "Beijing",
        "population": 1439323776,
        "flagImageUrl": "https://flagcdn.com/cn.svg"
    },
    {
        "id": 15,
        "countryName": "India",
        "capital": "New Delhi",
        "population": 1380004385,
        "flagImageUrl": "https://flagcdn.com/in.svg"
    },
    {
        "id": 16,
        "countryName": "Russia",
        "capital": "Moscow",
        "population": 145934462,
        "flagImageUrl": "https://flagcdn.com/ru.svg"
    },
    {
        "id": 17,
        "countryName": "South Africa",
        "capital": "Pretoria",
        "population": 59308690,
        "flagImageUrl": "https://flagcdn.com/za.svg"
    },
    {
        "id": 18,
        "countryName": "Egypt",
        "capital": "Cairo",
        "population": 102334404,
        "flagImageUrl": "https://flagcdn.com/eg.svg"
    },
    {
        "id": 19,
        "countryName": "Nigeria",
        "capital": "Abuja",
        "population": 206139589,
        "flagImageUrl": "https://flagcdn.com/ng.svg"
    },
    {
        "id": 20,
        "countryName": "Saudi Arabia",
        "capital": "Riyadh",
        "population": 34813871,
        "flagImageUrl": "https://flagcdn.com/sa.svg"
    },
    {
        "id": 21,
        "countryName": "South Korea",
        "capital": "Seoul",
        "population": 51269185,
        "flagImageUrl": "https://flagcdn.com/kr.svg"
    },
    {
        "id": 22,
        "countryName": "Turkey",
        "capital": "Ankara",
        "population": 84339067,
        "flagImageUrl": "https://flagcdn.com/tr.svg"
    },
    {
        "id": 23,
        "countryName": "Indonesia",
        "capital": "Jakarta",
        "population": 273523615,
        "flagImageUrl": "https://flagcdn.com/id.svg"
    },
    {
        "id": 24,
        "countryName": "Pakistan",
        "capital": "Islamabad",
        "population": 220892340,
        "flagImageUrl": "https://flagcdn.com/pk.svg"
    },
    {
        "id": 25,
        "countryName": "Bangladesh",
        "capital": "Dhaka",
        "population": 164689383,
        "flagImageUrl": "https://flagcdn.com/bd.svg"
    }
]

  return (
    <div>
      <div className="main-container">
        <div className='w-full flex flex-row flex-wrap justify-center'>
          <h1 className='text-2xl font-bold my-7'>
           Country
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
             {
              country.map((country) => {
                return(
                  <div key={country.id} className='flex flex-col border-2 border-gray-600 shadow-md shadow-slate-500 py-4 px-4 rounded-lg hover:scale-95 ease-in-out duration-300 gap-2 md:m-5 m-0  my-5 md:w-auto w-full'>
                    <div className='flex justify-center w-full'>
                        <img src={country.flagImageUrl} alt='' className='w-40 aspect-video'/>
                    </div>
                    <h3><span className='text-gray-400'>Country Name:</span>&nbsp;&nbsp;{country.countryName}</h3>
                    <h3><span className='text-gray-400'>Capital:</span>&nbsp;&nbsp;{country.capital}</h3>
                    <h3><span className='text-gray-400'>Population:</span>&nbsp;&nbsp;{country.population}</h3>
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
