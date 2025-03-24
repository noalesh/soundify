import { IconsSvg } from "./IconsSvg.jsx"
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { logout } from "../store/actions/user.actions";
import { SearchBar } from "../cmps/SearchBar";

export function AppHeader(){


    return (
        <section className="app-header-main">
          <NavLink to="/" className="logo">   
            <div className="section app-header-logo">
                <img src="/src/assets/imgs/logoImg.png" alt="App Logo" id="header-logo" />
            </div>
          </NavLink>
            
            <div className="app-header-search">
                <NavLink to="/">
                <button className="home-button"><IconsSvg svgName={'home'} /></button>   
                </NavLink>
                <form className="app-header-searchbar">
                    <IconsSvg svgName={'search'} />
                    <input type="text" placeholder="What do you want to play?" />
                    <IconsSvg svgName={'collection'} />
                </form>
            </div>

            <div className="app-header-user">
                <div className="user-section">
                    {/* <img src="src/assets/Images/Logo.png" id="user-icon" /> */}
                </div>
            </div>
        </section>
    )
}
