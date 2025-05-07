import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ListingsData from './data/data.json';
import JobCart from './components/JobCart';
import FilterItem from './components/FilterItem';
import Search from './components/Search';

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);
  const [dev, setDev] = useState('');

  
  useEffect(() => {
    let filteredList = ListingsData;

    if (filters.length > 0) {
      filteredList = filteredList.filter((job) =>
        filters.every((filter) =>
          [...job.tools, ...job.languages].includes(filter)
        )
      );
    }

    if (dev !== '') {
      filteredList = filteredList.filter((job) =>
        job.position.toLowerCase().includes(dev.toLowerCase())
      );
    }

    setListings(filteredList);
  }, [filters, dev]);

  const demoFilter = (skill) => {
    if (!filters.includes(skill)) {
      setFilters([...filters, skill]);
    }
  };

  const removeFilter = (remove_filter) => {
    setFilters(filters.filter((item) => item !== remove_filter));
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center text-gray-900 h-12 bg-[#e0ffff]">
        {filters.length <= 0
          ? 'No skills available yet'
          : filters.map((item) => (
            <FilterItem item={item} key={item} removeFilter={removeFilter} />
          ))}
        {filters.length === 0 ? '' : (
          <button
            className="ml-2 px-4 py-5 text-sm text-red-600 bg-red-100 rounded hover:bg-red-200 transition"
            onClick={() => setFilters([])}
          >
            Clear
          </button>
        )}
      </div>
      <div className='bg-[#e0ffff]'>
        <Search dev={dev} setDev={setDev} />
      </div>
      <div className="grid p-16 justify-center items-center bg-[#e0ffff]">
        {listings.map((listing) => (
          <JobCart listing={listing} key={listing.id} demoFilter={demoFilter} />
        ))}
      </div>
    </div>
  );
}

export default App;
