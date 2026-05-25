import { useState } from 'react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

const Search = ({ searchResults, setFilterData }) => {
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
      <div>
        <SearchForm handleSubmit={handleSubmit} />
        <pre>{JSON.stringify(searchResults)}</pre>
      </div>
    </Layout>
  );
};

export default Search;
