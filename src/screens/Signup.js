import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const Navigate = useNavigate();

  const { success, loading, user, authRegister } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (success) {
      Navigate("/home");
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authRegister(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Signup"}
        </button>
        <div className="row">
          I already have an account
          <Link to="/" className="raf">
            Login
          </Link>
        </div>
           {/* <div className="row">
          I don't have an account
          <Link to="/signup" className="raf">
            sign up
          </Link> 
        </div>   */}
        <div className="row" >
          I am a restaurant owner
          <Link to="/addrestaurant" className="raf" >
            register restaurant
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
