import React from "react";
import { useSelector } from "react-redux";
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

export default function FavoritesList() {
  const likedSongs = useSelector((state) => state.songs.likedSongs);
  const filtered = songs.filter((song) => likedSongs.includes(song.id));
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
      {filtered.length === 0 ? (
        <div
          style={{
            color: "#B3B3B3",
            fontSize: "18px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          No favorite songs yet. Like some songs to see them here!
        </div>
      ) : (
        filtered.map((song) => <SongCard key={song.id} song={song} />)
      )}
    </div>
  );
}
