const DestinationsList = ({ destination }) => {
  return (
    <div className="col-3">
      <div className="destination__card">
        <div className="destinations__cart__img">
          <img src={destination.image} alt={destination.name} />
        </div>
      </div>
    </div>
  );
};
export default DestinationsList;
