const AnalyticsCard = ({ title, average, median }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">Average - {average}</p>
        <p className="card-text text-center">Median - {median}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
