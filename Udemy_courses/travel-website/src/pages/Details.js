import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Details = () => {
    const {id} = useParams();
    
    return(
        <h1>Details {id} </h1>
    )
}
export default Details