const mongoose = require("mongoose");
const Song = require("./SongsSchema");

const seedSongs = async () => {
    const songs = [
      {
        title: "Billie Jean",
        url: "https://your-server.com/songs/billie_jean.mp3",
        playing: false,
        time: "4:54",
        image: "https://your-server.com/images/billie_jean.jpg", 
      },
      {
        title: "Beat It",
        url: "https://your-server.com/songs/beat_it.mp3",
        playing: false,
        time: "4:18",
        image: "https://your-server.com/images/beat_it.jpg",
      },
      {
        title: "Thriller",
        url: "https://your-server.com/songs/thriller.mp3",
        playing: false,
        time: "5:57",
        image: "https://your-server.com/images/thriller.jpg", 
      },
      {
        title: "Smooth Criminal",
        url: "https://your-server.com/songs/smooth_criminal.mp3",
        playing: false,
        time: "4:17",
        image: "https://your-server.com/images/smooth_criminal.jpg", 
      },
      {
        title: "Black or White",
        url: "https://your-server.com/songs/black_or_white.mp3",
        playing: false,
        time: "3:21",
        image: "https://your-server.com/images/black_or_white.jpg",
      },
    ];
  
    try {
      const res = await Song.insertMany(songs);
      console.log("Songs added successfully");
    } catch (error) {
      console.error("Error adding songs:", error);
    } finally {
      mongoose.connection.close();
    }
  };

module.exports = seedSongs;