import { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import ReviewBody from "./ReviewBody";
const Reviews = () => {
  const {
    sharedData: { reviewData },
  } = useContext(SharedContext);
  const [heading] = useState("What our customers are saying?");
  
  return (
    <div className="reviews">
      <div className="container">
        <div className="heading headingAnimation">{heading}</div>
        <div className="row mr-minus-15 ml-minus-15">
          {reviewData.length > 0
            ? reviewData.map((review, index) => (
                <ReviewBody key={index} review={review} />
              ))
            : ""}
          
        </div>
        
      </div>
    </div>
  );
  
};
export default Reviews;
