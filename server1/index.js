const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});
app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});
app.listen(8080, () => {
  console.log("port is running in http://localhost:8080");
});
