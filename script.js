// script.js

function toggleTrackList(albumId) {
    var trackList = document.getElementById(albumId);
    trackList.classList.toggle('hidden');
  }
  
  function playSong(songName, duration) {
    alert("Requesting backend to play Song: " + songName + " Duration: " + duration);
    document.getElementById('currentSong').innerText = "Now Playing: " + songName + " - " + duration;
  
    // Add the selected song to the playlist
    var playlist = document.getElementById('playlist');
    var newSong = document.createElement('li');
    newSong.innerHTML = songName + " <span class='duration'>" + duration + "</span>";
    playlist.appendChild(newSong);
  }
  
  function toggleDropdown() {
    var playlist = document.getElementById('playlist');
    playlist.classList.toggle('hidden');
  }
  