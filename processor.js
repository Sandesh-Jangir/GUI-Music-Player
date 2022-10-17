const songContainer = './Music/';
const fs = require('fs');

var main_grp = document.getElementById('main-grp')
fs.readdir(songContainer, (err, files) => {
  files.forEach(file => {
    // let song_name = file[:];
    main_grp.innerHTML += `
    <div class="card">
    <div class="song-name">${file.slice(0, -4)}</div>
    <img src="./music_note.svg">
    <audio controls src="../Music/${file}"></audio>
    </div>`
  });
});