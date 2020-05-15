let express = require("express");
let AlgorithmTimer = require("./src/algorithm_timer");
let timer = new AlgorithmTimer;
let app = express();
app.use(express.static('public'));
app.use(express.json());

// retrieves the homepage html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/base.html');
});

// post method sends selection to server side and returns json of timings
app.post('/api', (req, res) => {
  nameditem = req.body.value;
  // run once so the first instance removes some spikes
  timer.recordTime(String(nameditem));
  let data = timer.recordTime(String(nameditem));
  res.json({
    status: 'success',
    timer: data
  });
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
