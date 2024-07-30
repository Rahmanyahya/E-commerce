const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (_, res) => {
  return res.send("Hello world");
});

app.listen(3000, () => {
  console.log('App listening on port 3001!, http://localhost:3001');
});