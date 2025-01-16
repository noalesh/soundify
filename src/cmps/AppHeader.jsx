import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { logout } from "../store/actions/user.actions";
import { SearchBar } from "../cmps/SearchBar";

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState("");

  async function onLogout() {
    try {
      await logout();
      navigate("/");
      showSuccessMsg(`Bye now`);
    } catch (err) {
      showErrorMsg("Cannot logout");
    }
  }

  return (
    <header className="app-header full">
      <nav>
        <NavLink to="/" className="logo">
          <img
            className="logo-img"
            src="/src/assets/imgs/soundify.jpeg"
            alt="Soundify Logo"
          />
        </NavLink>

        {/* Using SearchBar component */}
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />

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
