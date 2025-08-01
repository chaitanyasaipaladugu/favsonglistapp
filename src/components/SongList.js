import React from "react";
import SongCard from "./SongCard";
const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    albumArt: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    title: "Shape of You",
    artist: "Ed Sheeran",
    albumArt: "https://via.placeholder.com/80",
  },
];

export default function SongList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}
