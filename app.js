let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/base.html');
});

app.post('/api', (req, res) => {
  console.log(req.body);
})

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
