const SearchResults = ({ searchResults, errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          <p className="mb-0">{`Error message:  ${errorMessage}  `}</p>
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Device Model</th>
            <th scope="col">Operating System</th>
            <th scope="col">App Usage Time (min/day)</th>
            <th scope="col">Screen On Time (hours/day)</th>
            <th scope="col">Battery Drain (mAh/day)</th>
            <th scope="col">Number of Apps Installed</th>
            <th scope="col">Data Usage (MB/day)</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">User Behavior Class</th>
          </tr>
        </thead>
        <tbody>
          {searchResults &&
            searchResults instanceof Array &&
            searchResults.map((result, index) => (
              <tr key={`${index}-result`}>
                <td>{result['User ID']}</td>
                <td>{result['Device Model']}</td>
                <td>{result['Operating System']}</td>
                <td>{result['App Usage Time (min/day)']}</td>
                <td>{result['Screen On Time (hours/day)']}</td>
                <td>{result['Battery Drain (mAh/day)']}</td>
                <td>{result['Number of Apps Installed']}</td>
                <td>{result['Data Usage (MB/day)']}</td>
                <td>{result['Age']}</td>
                <td>{result['Gender']}</td>
                <td>{result['User Behavior Class']}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
