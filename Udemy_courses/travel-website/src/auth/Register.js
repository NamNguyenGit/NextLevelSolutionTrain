const Register = () => {
  return (
    <form>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          placeholder="Enter name"
          name=""
          className="group__control"
        />
      </div>
      <div className="group">
        <input
          type="email"
          placeholder="Enter email"
          name=""
          className="group__control"
        />
      </div>
      <div className="group">
        <input
          type="password"
          placeholder="Create password"
          name=""
          className="group__control"
        />
      </div>
      <div className="group">
        <input type="submit" value="Register" name="" className="btn-dark" />
      </div>
    </form>
  );
};
export default Register;
