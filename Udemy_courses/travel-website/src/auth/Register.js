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
      <div className="group flex space-between y-center">
        <input type="submit" value="Register" name="" className="btn-dark" />
        <span>Already have an account?</span>
      </div>
    </form>
  );
};
export default Register;
