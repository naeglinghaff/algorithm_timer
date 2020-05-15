let express = require("express");
let AlgorithmTimer = require("./src/algorithm_timer");
let app = express();
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/base.html');
});

app.post('/api', (req, res) => {
  console.log(req.body);
  res.end();
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
