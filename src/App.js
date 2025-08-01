import React from "react";
import { useSelector } from "react-redux";
import SongList from "./components/SongList";
import FavoritesList from "./components/FavoritesList";
import SongFilterToggle from "./components/SongFilterToggle";

function App() {
  const filter = useSelector((state) => state.songs.filter);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #1DB954 0%, #1ed760 100%)",
          padding: "40px 20px 20px 20px",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(29, 185, 84, 0.3)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            color: "white",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Favorite Songs App
        </h1>
      </div>
      <SongFilterToggle />
      {filter === "all" ? <SongList /> : <FavoritesList />}
    </div>
  );
}

export default App;
