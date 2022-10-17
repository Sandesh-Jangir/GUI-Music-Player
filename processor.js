const songContainer = './Music/';
const fs = require('fs');

var main_grp = document.getElementById('main-grp')
fs.readdir(songContainer, (err, files) => {
  files.forEach(file => {
    main_grp.innerHTML += `${file}`
  });
});