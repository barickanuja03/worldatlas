export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    const sortCountries = (value) => {
      const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortCountry);
    };
  
    return (
      <section className="main-container flex flex-row justify-around my-11">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
            className="w-full h-8 bg-white text-black  outline-none rounded-xl pl-5 mt-5"
          />
        </div>
  
        <div>
          <button 
          onClick={() => sortCountries("asc")}
          className="border-white border-2 px-4 mt-5"
         >Asc</button>
        </div>
  
        <div>
          <button 
            onClick={() => sortCountries("des")}
            className="border-white border-2 px-4 mt-5"
          >Desc</button>
        </div>
  
        <div>
          <select
            className="bg-transparent text-white mt-5 border-white"
            value={filter}
            onChange={handleSelectChange}
          >
            <option className="bg-black text-white " value="all">All</option>
            <option className="bg-black text-white " value="Africa">Africa</option>
            <option className="bg-black text-white " value="Americas">Americas</option>
            <option className="bg-black text-white " value="Asia">Asia</option>
            <option className="bg-black text-white " value="Europe">Europe</option>
            <option className="bg-black text-white " value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  };