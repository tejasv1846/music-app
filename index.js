


const songs=[
    "https://ia802904.us.archive.org/30/items/20200401_20200401_0830/%282009%29%2005%20Friend%2C%20Please.mp3",
    "https://ia802904.us.archive.org/30/items/20200401_20200401_0830/%282015%29%2003%20Ride.mp3",
    "https://ia902904.us.archive.org/30/items/20200401_20200401_0830/%282013%29%2011%20Trees.mp3"

    


];
let currentSongIndex=0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audioSource = document.getElementById('audio-source');

function loadSong(index) {
  currentSongIndex= index

  audioSource.src = songs[currentSongIndex];
  audio.load();
  // Start playing automatically when song changes
  // Store the index of the last played song in localStorage
}
  function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
  }
  
  function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  


  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
document.addEventListener('DOMContentLoaded', function() {
const lastPlayedIndex = localStorage.getItem('lastPlayedSongIndex');
  if (lastPlayedIndex !== null) {
    loadSong(lastPlayedIndex);
    console.log(lastPlayedIndex);
  } else {
    // Handle the case where there is no last played song
    console.log("No last played song found.");
  }
});