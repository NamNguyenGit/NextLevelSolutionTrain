import { useState } from "react";
const Contact = () => {
    const [number, setnumber] = useState(2);
    const increment = () => {
        setnumber(number+1);
    }
    const decrement = () => {
        setnumber(number-1);
    };
    const [names] = useState([
        {id:1, name:"Nam"},
        {id:2, name:"Nam2"},
        {id:3, name:"Nam3"},
        {id:4, name:"Nam4"},

    ])

    return (
        <div>
            <h1>Hi {number}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            {names.map((user) => {
                return <h1>{user.id} : {user.name}</h1>
            })}
        </div>
    );
};
export default Contact;
