const DestinationsList = ({ destination }) => {
  return (
    <div className="col-3 p-15">
      <div className="destinations__card">
        <div className="destinations__card__img">
          <img src={destination.image} alt={destination.name} />
        </div>
      </div>
    </div>
  );
};
export default DestinationsList;
