const express = require('express');
const routes = require('./config/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes)

app.listen(3000, () => {
    console.log("Listening to port 3000");
})