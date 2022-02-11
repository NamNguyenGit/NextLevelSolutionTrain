import { LazyLoadImage } from "react-lazy-load-image-component";

const ReviewBody = ({ review }) => {
  console.log(review.name)
  return (
    <div className="col-4 p-15">
      <div className="reviews__body">
        <div className="reviews__body__contents">
          <div className="reviews__body__contents__img">
            <LazyLoadImage src={review.image} alt={review.image} />
          </div>
          <div className="reviews__body__contents__info">
            <div className="reviews__body__contents__info__name">
              {review.name}
            </div>
            <div className="reviews__body__contents__info__rating">
              {review.stars}
            </div>
            <div className="reviews__body__contents__info__comment">
              {review.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewBody;
