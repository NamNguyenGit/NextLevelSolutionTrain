import { useState } from "react";
const Contact = () => {
    const [name] = useState("")

    return (
        <div>
            {name ? name : 'Please define your name'}
        </div>
    )
}
export default Contact;
