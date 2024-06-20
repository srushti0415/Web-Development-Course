const fs = require("fs");

fs.readFile("./message1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

import { readFile } from "fs";
fs.writeFile("message1.txt", "Hello fom NodeJS", (err) => {
  if (err) throw err;
  console.log("The file has been saved !!");
});
