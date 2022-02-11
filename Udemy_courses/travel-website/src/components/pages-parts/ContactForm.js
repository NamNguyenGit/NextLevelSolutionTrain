const ContactForm = () => {
  return (
    <form>
      <div className="group">
        <h3 className="page__contact__heading">contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          name=""
          placeholder="Your name eg. nam"
        />
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          name=""
          placeholder="Your email eg. nam@gmail.com"
        />
      </div>
      <div className="group">
        <textarea
          placeholder="Write your message eg. I have troubles"
          className="group__textarea"
          name=""
          cols="12"
          rows="8"
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};

export default ContactForm;
