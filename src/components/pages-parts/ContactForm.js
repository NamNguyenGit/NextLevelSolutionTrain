import { useState } from "react";
const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitContact = (e) => {
    e.preventDefault();
    
  };
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          name=""
          placeholder="Your name eg. nam"
          value={state.name}
          onChange={(e) =>
            setState({
              ...state,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          name=""
          placeholder="Your email eg. nam@gmail.com"
          value={state.email}
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="group">
        <textarea
          placeholder="Write your message eg. I have troubles"
          className="group__textarea"
          name=""
          cols="12"
          rows="8"
          defaultValue={state.message}
          onChange={(e) =>
            setState({
              ...state,
              message: e.target.value,
            })
          }
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};

export default ContactForm;
