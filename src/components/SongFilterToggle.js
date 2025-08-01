import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/songsSlice";

export default function SongFilterToggle() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.songs.filter);
  return (
    <div
      style={{
        margin: "20px",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <button
        onClick={() => dispatch(setFilter("all"))}
        disabled={filter === "all"}
        style={{
          padding: "12px 24px",
          margin: "0 8px",
          borderRadius: "20px",
          border: "none",
          fontSize: "14px",
          fontWeight: "600",
          cursor: filter === "all" ? "default" : "pointer",
          transition: "all 0.2s ease",
          backgroundColor: filter === "all" ? "#1DB954" : "#282828",
          color: filter === "all" ? "white" : "#B3B3B3",
          boxShadow:
            filter === "all" ? "0 4px 12px rgba(29, 185, 84, 0.3)" : "none",
        }}
        onMouseEnter={(e) => {
          if (filter !== "all") {
            e.currentTarget.style.backgroundColor = "#404040";
            e.currentTarget.style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={(e) => {
          if (filter !== "all") {
            e.currentTarget.style.backgroundColor = "#282828";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        All Songs
      </button>
      <button
        onClick={() => dispatch(setFilter("favorites"))}
        disabled={filter === "favorites"}
        style={{
          padding: "12px 24px",
          margin: "0 8px",
          borderRadius: "20px",
          border: "none",
          fontSize: "14px",
          fontWeight: "600",
          cursor: filter === "favorites" ? "default" : "pointer",
          transition: "all 0.2s ease",
          backgroundColor: filter === "favorites" ? "#1DB954" : "#282828",
          color: filter === "favorites" ? "white" : "#B3B3B3",
          boxShadow:
            filter === "favorites"
              ? "0 4px 12px rgba(29, 185, 84, 0.3)"
              : "none",
        }}
        onMouseEnter={(e) => {
          if (filter !== "favorites") {
            e.currentTarget.style.backgroundColor = "#404040";
            e.currentTarget.style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={(e) => {
          if (filter !== "favorites") {
            e.currentTarget.style.backgroundColor = "#282828";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        Favorites
      </button>
    </div>
  );
}
