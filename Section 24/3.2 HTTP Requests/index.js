import express from "express";
const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Sunshine /</h1>");
});

app.get("/about", (req, res) => {
  res.send("<p>Hello moonshine/</p>");
});

app.listen(port, () => {
  console.log(`server started on poart ${port}`);
});
