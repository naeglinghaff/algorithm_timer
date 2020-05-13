let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/base.html');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
