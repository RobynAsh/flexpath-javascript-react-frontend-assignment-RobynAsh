const SearchForm = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-3">
          <div className="form-floating">
            <select className="form-select" id="filterType">
              <option value="gender">Gender</option>
              <option value="operatingSystem">Operating System</option>
              <option value="model">Model</option>
              <option value="behaviorClass">Behavior Class</option>
            </select>
            <label for="filterType">Filter Type</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="filterKeyword"
              placeholder="keyword"
            />
            <label for="filterKeyword">Keyword</label>
          </div>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-secondary h-100">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
