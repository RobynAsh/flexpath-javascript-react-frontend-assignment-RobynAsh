import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import useGetSearchResults from './hooks/useGetSearchResults';
import {
  BrowserRouter,
  //createBrowserRouter,
  //RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const { searchResults, setFilterData, isLoading, errorMessage, filterData } =
    useGetSearchResults();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                searchResults={searchResults}
                setFilterData={setFilterData}
                isLoading={isLoading}
                errorMessage={errorMessage}
                filterData={filterData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
