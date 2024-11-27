const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/iframe1", (req, res) => {
  res.sendFile(__dirname + "/public/iframe1.html");
});
app.get("/iframe2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe2.html");
});
app.listen(3000, () => {
  console.log("port is running in http://localhost:3000");
});
