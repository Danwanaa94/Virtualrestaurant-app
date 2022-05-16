import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginRestaurant() {
  const Navigate = useNavigate();

  const { success, loading, user, AuthAddRestaurant } = useContext(AuthContext);
  const [restaurantname, setRestaurantname] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (success) {
      Navigate("/");
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthAddRestaurant(restaurantname, contact);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="restaurantname">restaurantname</label>
          <input
            type="text"
            className="form-control"
            placeholder="restaurantname"
            value={restaurantname}
            onChange={(e) => setRestaurantname(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="contact">contact</label>
          <input
            type="booking"
            className="form-control"
            placeholder="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Log in restaurant"}
        </button>
        {/* <div className="row">
          Already have restaurant account
          <Link to="/Loginrestaurant" className="nav-link">
            log in restaurant
          </Link>
          I don't have restaurant account
          <Link to="/Addrestaurant" className="nav-link">
            Add restaurant
          </Link>
        </div> */}
      </div>
    </form>
  );
}

export default LoginRestaurant;
