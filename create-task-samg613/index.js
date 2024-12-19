let songs = [];

function addSong() {
  const title = document.getElementById("songTitle").value;
  const artist = document.getElementById("artist").value;
  const genre = document.getElementById("genre").value;
  const releaseDate = document.getElementById("releaseDate").value;

  const song = {
    title: title,
    artist: artist,
    genre: genre,
    releaseDate: releaseDate,
  };

  songs.push(song);

  document.getElementById("songTitle").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("releaseDate").value = "";

  displaySongs(songs);
}

function displaySongs(songList) {
  const songListContainer = document.getElementById("songList");

  songListContainer.innerHTML = "";

  songList.forEach((song, index) => {
    const songHTML = `
            <div class="song">
                <strong>${song.title}</strong> by ${song.artist} - Genre: ${song.genre} - Released: ${song.releaseDate}
                <button onclick="deleteSong(${index})" class="delete-button">Delete</button>
            </div>
        `;

    songListContainer.insertAdjacentHTML("beforeend", songHTML);
  });
}

function deleteSong(index) {
  songs.splice(index, 1);

  displaySongs(songs);
}

function filterSongs() {
  const filterGenre = document
    .getElementById("filterGenre")
    .value.toLowerCase();
  const filterYear = document.getElementById("filterYear").value;

  const filteredSongs = songs.filter((song) => {
    let genreMatch = true;
    let yearMatch = true;

    if (filterGenre && !song.genre.toLowerCase().includes(filterGenre)) {
      genreMatch = false;
    }

    if (filterYear && !song.releaseDate.startsWith(filterYear)) {
      yearMatch = false;
    }

    return genreMatch && yearMatch;
  });

  displaySongs(filteredSongs);
}

document.getElementById("addSongButton").addEventListener("click", addSong);
