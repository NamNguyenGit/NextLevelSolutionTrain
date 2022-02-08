import { useState } from "react";
const Contact = ({myName,myCountry}) => {
    const [name] = useState("");

    return (
        <div style={{backgroundColor: "red", fontSize: "30px",color: "white"}}>
           <h1>{myName}</h1>
           <h1>{myCountry}</h1>
        </div>
    );
};
export default Contact;
