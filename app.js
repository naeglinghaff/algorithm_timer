let express = require("express");
let AlgorithmTimer = require("./src/algorithm_timer");
let timer = new AlgorithmTimer;
let app = express();
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/base.html');
});

app.post('/api', (req, res) => {
  nameditem = req.body.value;
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
