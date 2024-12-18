let songs = [];

function addSong() {
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const year = document.getElementById("year").value;

  if (title === "" || artist === "" || year === "") {
    alert("Please fill in all fields.");
    return;
  }

  const song = { title, artist, year };
  songs.push(song);

  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("year").value = "";

  displaySongs();
}

function displaySongs() {
  const songListElement = document.getElementById("songs-list");
  songListElement.innerHTML = "";

  songs.forEach((song, index) => {
    const songHTML = `
            <li class="song">
                ${song.title} by ${song.artist} (${song.year})
                <button onclick="removeSong(${index})">Remove</button>
            </li>
        `;
    songListElement.insertAdjacentHTML("beforeend", songHTML);
  });
}

function removeSong(index) {
  songs.splice(index, 1);
  displaySongs();
}
