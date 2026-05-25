import { useEffect, useState } from 'react';

const useGetSearchResults = () => {
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [filterData, setFilterData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const getSearchResults = async () => {
    const params = new URLSearchParams({
      filterType: filterData.filterType,
      keyword: filterData.filterKeyword,
    }).toString();
    try {
      const data = await fetch(`/api/data/search?${params}`);
      const results = await data.json();
      setSearchResults(results);
      setErrorMessage(undefined);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasInitialized) {
      setIsLoading(true);
      getSearchResults();
    } else setHasInitialized(true);
  }, [filterData]);

  return { searchResults, setFilterData, isLoading, errorMessage, filterData };
};

export default useGetSearchResults;
