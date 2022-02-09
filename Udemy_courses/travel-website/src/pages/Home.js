import { useState } from "react";
import Header from "../components/Header";
const Home = () => {
    const[state] = useState({
        heading: ' We are travel friends',
        paragraph: ' Come and join us we travel the most famous and beautiful places in the world.'
    })
    return (
        <div>
            <Header heading={state.heading} paragraph={state.paragraph}>
                <button>Get Started</button>
            </Header>
        </div>
    )
};
export default Home;