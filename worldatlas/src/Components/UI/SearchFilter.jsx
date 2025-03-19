export const SearchFilter = ({search, setSearch, filter, setFilter}) =>{
  const handleInputChange = (event) =>{
    setSearch(event.target.value);
  }
  const handleSelectChange = (event) =>{
     setFilter (event.target.value);
  }
  return <section className="main-container my-12">
    <div className=" flex flex-row justify-evenly items-center">
    <input 
        type="text" 
        placeholder="search"
        value={search}
        onChange={handleInputChange}
        className="text-black capitalize outline-none border-[1px] border-black py-2 w-[20vw] px-3"
      />
      <div>
        {/* <button className="border-[1px] border-black py-2 text-black mx-4 bg-white px-3" onClick={() => sortCountries("asc")}>ASC</button>
        <button className="border-[1px] border-black py-2 text-black mx-4 bg-white px-3" onClick={() => sortCountries("desc")}>DESC</button> */}
        <select className="text-black capitalize outline-none border-[1px] border-black py-2" value={filter} onChange={handleSelectChange} >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  </section>
}