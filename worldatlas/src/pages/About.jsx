import React from 'react'
function About() {
  const about = [
    {
      "id": 1,
      "country": "United States",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "interesting_fact": "The US is home to the world's longest cave system, Mammoth Cave."
    },
    {
      "id": 2,
      "country": "Canada",
      "capital": "Ottawa",
      "population": 38005238,
      "interesting_fact": "Canada has more lakes than any other country in the world."
    },
    {
      "id": 3,
      "country": "Australia",
      "capital": "Canberra",
      "population": 25687041,
      "interesting_fact": "Australia is home to 21 of the world's 25 most venomous snakes."
    },
    {
      "id": 4,
      "country": "India",
      "capital": "New Delhi",
      "population": 1393409038,
      "interesting_fact": "India is the world's largest producer of milk."
    },
    {
      "id": 5,
      "country": "China",
      "capital": "Beijing",
      "population": 1444216107,
      "interesting_fact": "China has the longest high-speed rail network in the world."
    },
    {
      "id": 6,
      "country": "Brazil",
      "capital": "Brasília",
      "population": 213993437,
      "interesting_fact": "Brazil is home to the Amazon Rainforest, the largest tropical rainforest in the world."
    },
    {
      "id": 7,
      "country": "Russia",
      "capital": "Moscow",
      "population": 145912025,
      "interesting_fact": "Russia is the largest country in the world by land area."
    },
    {
      "id": 8,
      "country": "Japan",
      "capital": "Tokyo",
      "population": 125836021,
      "interesting_fact": "Japan is made up of over 6,800 islands."
    },
    {
      "id": 9,
      "country": "Germany",
      "capital": "Berlin",
      "population": 83166711,
      "interesting_fact": "Germany is home to the world's largest beer festival, Oktoberfest."
    },
    {
      "id": 10,
      "country": "France",
      "capital": "Paris",
      "population": 67413000,
      "interesting_fact": "France is the most visited country in the world."
    },
    {
      "id": 11,
      "country": "United Kingdom",
      "capital": "London",
      "population": 67886011,
      "interesting_fact": "The UK has over 1,500 castles."
    },
    {
      "id": 12,
      "country": "Italy",
      "capital": "Rome",
      "population": 60244639,
      "interesting_fact": "Italy has more UNESCO World Heritage sites than any other country."
    },
    {
      "id": 13,
      "country": "South Africa",
      "capital": "Pretoria, Cape Town, Bloemfontein",
      "population": 59308690,
      "interesting_fact": "South Africa has three capital cities."
    },
    {
      "id": 14,
      "country": "Egypt",
      "capital": "Cairo",
      "population": 104124440,
      "interesting_fact": "Egypt is home to the Great Pyramid of Giza, the only surviving ancient wonder."
    },
    {
      "id": 15,
      "country": "Mexico",
      "capital": "Mexico City",
      "population": 128932753,
      "interesting_fact": "Mexico introduced chocolate, chillies, and corn to the world."
    },
    {
      "id": 16,
      "country": "Argentina",
      "capital": "Buenos Aires",
      "population": 45376763,
      "interesting_fact": "Argentina is the birthplace of tango."
    },
    {
      "id": 17,
      "country": "Saudi Arabia",
      "capital": "Riyadh",
      "population": 35340680,
      "interesting_fact": "Saudi Arabia is the largest country without a river."
    },
    {
      "id": 18,
      "country": "South Korea",
      "capital": "Seoul",
      "population": 51780579,
      "interesting_fact": "South Korea has the fastest internet in the world."
    },
    {
      "id": 19,
      "country": "Indonesia",
      "capital": "Jakarta",
      "population": 273523621,
      "interesting_fact": "Indonesia is made up of over 17,000 islands."
    },
    {
      "id": 20,
      "country": "Nigeria",
      "capital": "Abuja",
      "population": 206139589,
      "interesting_fact": "Nigeria is the most populous country in Africa."
    },
    {
      "id": 21,
      "country": "Turkey",
      "capital": "Ankara",
      "population": 84339067,
      "interesting_fact": "Turkey is home to two of the Seven Wonders of the Ancient World."
    },
    {
      "id": 22,
      "country": "Thailand",
      "capital": "Bangkok",
      "population": 69799978,
      "interesting_fact": "Thailand is the only Southeast Asian country never colonized by Europe."
    },
    {
      "id": 23,
      "country": "Spain",
      "capital": "Madrid",
      "population": 47351567,
      "interesting_fact": "Spain produces over 40% of the world's olive oil."
    },
    {
      "id": 24,
      "country": "Sweden",
      "capital": "Stockholm",
      "population": 10421539,
      "interesting_fact": "Sweden is home to the world's first national park."
    },
    {
      "id": 25,
      "country": "New Zealand",
      "capital": "Wellington",
      "population": 5134000,
      "interesting_fact": "New Zealand has more sheep than people."
    }
  ]
  
  return (
    <>
     <section className='main-container'>
       <h1 className='text-center text-3xl font-semibold my-8'>
       Here are the interesting Facts<br />we're proud of
       </h1>
       <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {
            about.map((data) => {
            return(
              <div key={data.id} className='flex flex-col border-2 border-gray-600 shadow-md shadow-slate-500 py-3 px-4 rounded-lg hover:scale-95 ease-in-out duration-300 gap-2'>
                    <h1 className='text-xl font-semibold'>{data.country}</h1>
                    <h2><span className='text-red-800'>Capital:</span>&nbsp;&nbsp;{data.capital}</h2>
                    <h2><span className='text-red-800'>Population:</span>&nbsp;&nbsp;{data.population}</h2>
                    <p><span className='text-red-800'>Intresting Facts:</span>&nbsp;&nbsp; <br />{data.interesting_fact}</p>
                 </div>
             );
            })
          }
        </div>
       </div>
     </section> 
    </>
  )
}

export default About
