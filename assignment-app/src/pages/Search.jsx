import { useState } from 'react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import RecordDisplay from '../components/RecordDisplay';
import SearchResults from '../components/SearchResults';
import Analytics from '../components/Analytics';

const Search = ({
  searchResults,
  setFilterData,
  isLoading,
  errorMessage,
  filterData,
}) => {
  return (
    <Layout>
      <div className="container">
        <SearchForm filterData={filterData} setFilterData={setFilterData} />
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
