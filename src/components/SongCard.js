import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../redux/songsSlice";

export default function SongCard({ song }) {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);
  const isLiked = likedSongs.includes(song.id);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        margin: "8px 0",
        backgroundColor: "#181818",
        borderRadius: "8px",
        border: "1px solid #282828",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        maxWidth: "400px",
        minWidth: "300px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#282828";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#181818";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
      }}
    >
      {/* Album Art */}
      <div style={{ position: "relative", marginRight: "16px" }}>
        <img
          src={song.albumArt}
          alt={song.title}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "4px",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        />
        {/* Play button overlay on hover */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "24px",
            height: "24px",
            backgroundColor: "#1DB954",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.2s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
        >
          <span style={{ color: "white", fontSize: "12px", marginLeft: "1px" }}>
            ▶
          </span>
        </div>
      </div>

      {/* Song Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            margin: "0 0 4px 0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {song.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#B3B3B3",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {song.artist}
        </p>
      </div>

      {/* Like Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleLike(song.id));
        }}
        style={{
          background: "none",
          border: "none",
          padding: "8px",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "32px",
          height: "32px",
          marginLeft: "8px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span
          style={{
            fontSize: "18px",
            filter: isLiked
              ? "drop-shadow(0 0 8px rgba(29, 185, 84, 0.6))"
              : "none",
            transition: "all 0.2s ease",
          }}
        >
          {isLiked ? "💖" : "🤍"}
        </span>
      </button>
    </div>
  );
}
