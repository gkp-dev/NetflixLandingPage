const express = require('express');
const app = express();

app.use(express.static('./public'));

const port = process.env.PORT = 2300;

app.listen(port, () => {
    console.log(`My app is runnning on port ${port}`)
})