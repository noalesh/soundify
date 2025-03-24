import { useState, useEffect, useCallback } from "react"
import { SongPreview } from "./SongPreview.jsx"
import songsData from "../Data/Newdata.json"


// Regular function for debounce
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Regular function for filtering songs
function filterSongs(searchTerm, setResults) {
  if (!searchTerm) {
    setResults([]);
    return;
  }

  const filtered = songsData.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setResults(filtered);
}

// Main component
export function SearchFromStation() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(
    debounce((searchTerm) => filterSongs(searchTerm, setResults), 300),
    []
  );

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <div className="playlist-search-container">
      <hr className="divider" />
      <div className="header">
        <h2>Let's find something for your playlist</h2>
        <button className="close-btn" aria-label="Close">&times;</button>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for songs or episodes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {results.length > 0 && (
        <div className="results">
          {results.map((song) => (
            <SongPreview key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
