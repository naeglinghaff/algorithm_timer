let express = require("express");
let AlgorithmTimer = require("./src/algorithm_timer");
let timer = new AlgorithmTimer;
// for timing custom algorithms, avoiding global prototype editing
let CustomAlgorithmTimer = require("./src/custom_algorithm_timer");
let customTimer = new CustomAlgorithmTimer;
let app = express();
app.use(express.static('public'));
app.use(express.json());

// retrieves the homepage html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/base.html');
});

// post method sends selection to server side and returns json of timings
app.post('/api', (req, res) => {
  var nameditem = req.body.value;
  let data;
  if(nameditem.includes('custom')){
    customTimer.recordTime(String(nameditem));
    data = customTimer.recordTime(String(nameditem));
  } else {
  // calling function first to remove abnormal 1st results
  timer.recordTime(String(nameditem));
  data = timer.recordTime(String(nameditem));
  }
  res.json({
    status: 'success',
    value: req.body.value,
    timer: data
  });
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
