let express = require("express");
let AlgorithmTimer = require("./src/algorithm_timer");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/base.html');
});

const timer = new AlgorithmTimer;
timer.recordTime('sort');

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
