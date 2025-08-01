# 🎧 Favorite Songs App

A simple and interactive **React + Redux Toolkit** project to mark your favorite songs!  
Toggle "Like/Unlike" songs, view all or just favorites, with a clean, modern UI.

---

## 🚀 Features

- 🎵 Display a list of songs with album art
- 💖 Like / Unlike songs with a heart toggle
- 🔄 Switch between:
  - All Songs
  - Favorite Songs only
- ⚛️ State management using Redux Toolkit

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- JavaScript
- CSS / Inline styles (optional Tailwind or Framer Motion for animations)

---

## 📂 Folder Structure

/src
/components
SongCard.js # Song card with like/unlike toggle
SongList.js # Shows all songs
FavoritesList.js # Shows only liked songs
SongFilterToggle.js # Filter buttons (All / Favorites)
/redux
songsSlice.js # Redux slice with likedSongs & filter logic
App.js # Main app layout logic
index.js # Store setup and React entry

yaml
Copy
Edit

---

## 📦 Setup & Run

1. **Clone the repo**
```bash
git clone https://github.com/your-username/favorite-songs-app.git
cd favorite-songs-app
Install dependencies

bash
Copy
Edit
npm install
Start development server

bash
Copy
Edit
npm start
🧠 Concepts Covered
📦 Redux slice (createSlice)

🎯 Action dispatching (toggleLike, setFilter)

🧠 Using useSelector and useDispatch

🔄 Conditional rendering based on Redux state

🧱 Component structure and props passing

🎨 Reusable song card components

🖼️ Screenshot
(Optional: Add image here)

✨ Future Improvements
🎧 Real API integration (e.g., Spotify, Last.fm)

📁 Save liked songs to localStorage

🎨 Add Framer Motion for card animations

🌓 Dark mode toggle

🔍 Search bar to filter songs

💡 Example Data (Sample Songs)
js
Copy
Edit
[
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://via.placeholder.com/80"
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    albumArt: "https://via.placeholder.com/80"
  }
]
📄 License
Free to use for educational or portfolio purposes.

🙌 Author
Built with ❤️ by chaitanya sai
