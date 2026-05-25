const RecordDisplay = ({ numOfRecords, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <p>
      {numOfRecords > 0
        ? `Displaying ${numOfRecords} Records`
        : `No Records to Display`}
    </p>
  );
};

export default RecordDisplay;
