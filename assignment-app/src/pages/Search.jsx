import { useState } from 'react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import RecordDisplay from '../components/RecordDisplay';
import SearchResults from '../components/SearchResults';
import Analytics from '../components/Analytics';

const Search = ({ searchResults, setFilterData, isLoading, errorMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const _formData = new FormData(event.target); // Create a FormData object from the form
    const _filterData = {};
    for (const [key, value] of _formData.entries()) {
      _filterData[key] = value;
    }
    setFilterData(_filterData);
  };
  return (
    <Layout>
      <div className="container">
        <SearchForm handleSubmit={handleSubmit} />
        <RecordDisplay
          numOfRecords={searchResults.length}
          isLoading={isLoading}
        />
        <Analytics searchResults={searchResults} />
        <SearchResults
          searchResults={searchResults}
          errorMessage={errorMessage}
        />
      </div>
    </Layout>
  );
};

export default Search;
