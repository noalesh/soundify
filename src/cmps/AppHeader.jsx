import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { logout } from "../store/actions/user.actions";

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();
  // State for managing the search term input
  const [searchTerm, setSearchTerm] = useState("");

  async function onLogout() {
    try {
      await logout();
      navigate("/");
      showSuccessMsg(`Bye now`);
    } catch (err) {
      showErrorMsg("Cannot logout");
    }
  }
  // Function to handle search form submission
  // Navigates to the search results page with the search term as a query parameter
  function onSearch(ev) {
    ev.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search?term=${searchTerm}`);
  }

  return (
    <header className="app-header full">
      <nav>
        <NavLink to="/" className="logo">
          <img className="logo-img" src="./src/assets/imgs/soundify.jpeg" />
        </NavLink>

        {/* Added search bar functionality */}
        <form onSubmit={onSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search songs, stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}

        {!user && (
          <NavLink to="login" className="login-link">
            Login
          </NavLink>
        )}
        {!user && (
          <NavLink to="login" className="login-link">
            Sign-Up
          </NavLink>
        )}
      </nav>
    </header>
  );
}
