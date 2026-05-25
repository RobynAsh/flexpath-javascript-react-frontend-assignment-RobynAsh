import { useEffect, useState } from 'react';

const useGetSearchResults = () => {
  const [filterData, setFilterData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const getSearchResults = async () => {
    const params = new URLSearchParams({
      filterType: filterData.filterType,
      keyword: filterData.filterKeyword,
    }).toString();
    const data = await fetch(`/api/data/search?${params}`);
    const results = await data.json();
    setSearchResults(results);
  };

  useEffect(() => {
    getSearchResults();
  }, [filterData]);

  return { searchResults, setFilterData };
};

export default useGetSearchResults;
