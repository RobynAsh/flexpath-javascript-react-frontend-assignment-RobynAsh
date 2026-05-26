import { useState } from 'react';

const SearchForm = ({ setFilterData, filterData }) => {
  const [filterKeyword, setFilterKeyword] = useState(
    filterData?.filterKeyword || null
  );
  const [filterType, setFilterType] = useState(filterData?.filterType || null);

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
    <form onSubmit={handleSubmit}>
      <div className="row">
        <h6 className="col">Search by Keyword</h6>
      </div>
      <div className="row mb-4">
        <div className="col-3">
          <div className="form-floating">
            <select
              className="form-select"
              id="filterType"
              name="filterType"
              value={filterType}
              onChange={(event) => {
                setFilterType(event.target.value);
              }}
            >
              <option value="gender">Gender</option>
              <option value="operatingSystem">Operating System</option>
              <option value="model">Model</option>
              <option value="behaviorClass">Behavior Class</option>
            </select>
            <label htmlFor="filterType">Filter Type</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              value={filterKeyword}
              onChange={(event) => {
                setFilterKeyword(event.target.value);
              }}
              className="form-control"
              id="filterKeyword"
              name="filterKeyword"
              placeholder="keyword"
            />
            <label htmlFor="filterKeyword">Keyword</label>
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-secondary h-100">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
