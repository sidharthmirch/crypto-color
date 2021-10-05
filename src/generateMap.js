const fs = require("fs");
const path = require("path");
const ColorThief = require("colorthief");

const folder = path.join(__dirname, "images");
let map = {};
let array = [];
fs.readdir(folder, function (err, files) {
  if (err) {
    console.log("Something went wrong reading the directory...", err);
    process.exit(1);
  }
  files.forEach(function (file, index) {
    const img = path.join(folder, file);
    ColorThief.getColor(img)
      .then((color) => {
        const rgb = `${color}`;
        array.push([file, rgb]);
        array.map(e => map[e[0]] = e[1]);
        fs.writeFileSync('colors.json', JSON.stringify(map))
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(array);
});
