import React from 'react'

function About() {
    const countrydata =[
          {
            "id": 1,
            "countryName": "Canada",
            "capital": "Ottawa",
            "population": 38008005,
            "interestingFacts": 
              "Canada is the second largest country in the world by land area",
           },
           {
             "id": 2,
             "countryName": "Japan",
             "capital": "Tokyo",
             "population": 125960000,
             "interestingFacts":
               "Japan has over 6,800 islands The Shinkansen, or bullet train, can travel up to 320 km/h , Japan has more than 100 active volcanoes."
           },
           {
             "id": 3,
             "countryName": "Brazil",
             "capital": "Brasilia",
             "population": 213993437,
             "interestingFacts": [
               "Brazil is the largest country in South America. It is home to the Amazon Rainforest.Brazil has won the FIFA World Cup five times."
             ]
           },
           {
             "id": 4,
             "countryName": "Australia",
             "capital": "Canberra",
             "population": 25788217,
             "interestingFacts": 
               "Australia is home to the Great Barrier Reef.,It is the smallest continent and one of the largest countries in the world,Australia has more kangaroos than people.",
        
           },
           {
             "id": 5,
             "countryName": "India",
             "capital": "New Delhi",
             "population": 1393409038,
             "interestingFacts": 
               "India is the world's largest democracy,The game of chess originated in India.,India has the second-largest population in the world.",
           },
           {
             "id": 6,
             "countryName": "Germany",
             "capital": "Berlin",
             "population": 83166711,
             "interestingFacts": 
               "Germany is known for its engineering and automotive industry.,It is home to the world's largest beer festival, Oktoberfest.,The Autobahn has no general speed limit."
           },
           {
             "id": 7,
             "countryName": "South Africa",
             "capital": "Pretoria",
             "population": 59308690,
             "interestingFacts": 
               "South Africa has three capital cities: Pretoria, Cape Town, and Bloemfontein ,It is known as the 'Rainbow Nation' due to its diverse cultures ,The country is famous for its wildlife and national parks."
           },
           {
             "id": 8,
             "countryName": "United Kingdom",
             "capital": "London",
             "population": 67886004,
             "interestingFacts": 
               "The UK is made up of four countries: England, Scotland, Wales, and Northern Ireland.,London has the world's oldest underground railway network, the London Underground.,The British Monarchy is one of the oldest in the world."
             
           },
           {
             "id": 9,
             "countryName": "Mexico",
             "capital": "Mexico City",
             "population": 128932753,
             "interestingFacts": 
               "Mexico is the largest Spanish-speaking country in the world.,It is home to one of the New Seven Wonders of the World, Chichen Itza.,Chocolate was first made by the ancient civilizations of Mexico.",
           },
           {
             "id": 10,
             "countryName": "Russia",
             "capital": "Moscow",
             "population": 146171015,
             "interestingFacts": 
               "Russia is the largest country in the world by land area.,It spans 11 time zones.,The Trans-Siberian Railway is the longest railway in the world.",
           },
           {
             "id": 11,
             "countryName": "China",
             "capital": "Beijing",
             "population": 1444216107,
             "interestingFacts": 
               "China has the world's largest population.,The Great Wall of China is one of the New Seven Wonders of the World.,China is the world's largest producer of solar energy.",
           },
           {
             "id": 12,
             "countryName": "Egypt",
             "capital": "Cairo",
             "population": 104258327,
             "interestingFacts": 
               "Egypt is home to the ancient pyramids, some of the oldest structures in the world.,The Nile is the longest river in the world.,Ancient Egyptians invented many things we use today, like paper and clocks.",
           },
           {
             "id": 13,
             "countryName": "France",
             "capital": "Paris",
             "population": 65273511,
             "interestingFacts": 
               "France is the most visited country in the world. ,The Eiffel Tower is one of the most recognizable landmarks globally. ,French cuisine is considered some of the finest in the world.",
      
           },
           {
             "id": 14,
             "countryName": "Italy",
             "capital": "Rome",
             "population": 60367477,
             "interestingFacts": 
               "Rome is home to the Vatican City, the smallest country in the world. ,Italy is famous for its art, history, and cuisine, especially pizza and pasta. ,It is the birthplace of the Renaissance."
           },
           {
             "id": 15,
             "countryName": "United States",
             "capital": "Washington, D.C.",
             "population": 331893745,
             "interestingFacts": 
               "The United States has the world's largest economy. It is home to the Grand Canyon, one of the natural wonders of the world. The US is made up of 50 states, with Alaska being the largest by area.",
           },
    ];
      
  return (
    <>
     <div className="main-container">
       <div className='flex flex-row flex-wrap justify-center'>
           <h2 className='text-center text-2xl font-bold my-8'>
            Here are the intresting facts 
             <br />
            We're proud of
           </h2>
       </div>
       <div>{
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
         {
            countrydata.map((data) =>{
                return(
                 <div key={data.id} className='flex flex-col border-2 border-gray-600 shadow-md shadow-slate-500 py-3 px-4 rounded-lg hover:scale-95 ease-in-out duration-300 gap-2'>
                    <h1 className='text-xl font-semibold'>{data.countryName}</h1>
                    <h2><span className='text-red-800'>Capital:</span>&nbsp;&nbsp;{data.capital}</h2>
                    <h2><span className='text-red-800'>Population:</span>&nbsp;&nbsp;{data.population}</h2>
                    <p><span className='text-red-800'>Intresting Facts:</span>&nbsp;&nbsp; <br />{data.interestingFacts}</p>
                 </div>
                );
            })
         }
       </div>
        }
        </div>
     </div> 
    </>
  )
}

export default About
