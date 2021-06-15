import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import currentUser from "../queries/currentUser";
import { Link } from "react-router-dom";
import mutation from "../mutations/Logout";

function Header() {
  const { data, loading } = useQuery(currentUser);
  const [logout] = useMutation(mutation, {
    refetchQueries: [{ query: currentUser }],
  });

  const handleLogout = () => {
    logout();
  };

  const renderButtons = () => {
    if (loading) return <div />;
    if (data.user) {
      return (
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
}

export default Header;
