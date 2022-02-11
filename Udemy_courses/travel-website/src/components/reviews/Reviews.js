import { useContext } from "react";
import SharedContext from "../../context/SharedContext";
const Reviews = () => {
    const {sharedData: {reviewData}} = useContext(SharedContext);
    console.log(reviewData);
  return (
    <h1>SomeThing</h1>
  ) 
};
export default Reviews;
