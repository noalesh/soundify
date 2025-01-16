import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../cmps/SearchBar";
import { MdLibraryMusic } from "react-icons/md";
import "@/assets/styles/cmps/SideBar.scss";

export function SideBar() {
  const [filterBy, setFilterBy] = useState("");

  const playlists = [
    { id: 1, name: "Liked Songs", link: "/liked-songs" },
    { id: 2, name: "Demi Playlist #1", link: "/playlist/1" },
    { id: 3, name: "Demi Playlist #2", link: "/playlist/2" },
    { id: 4, name: "Demi Playlist #3", link: "/playlist/3" },
  ];

  return (
    <aside className="side-bar">
      <div className="logo-section">
        <MdLibraryMusic className="library-icon" />
      </div>

      <div className="search-section">
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <div className="library-section">
        <h3>Your Library</h3>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <NavLink
                to={playlist.link}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
