const express = require('express');
const routes = require('./config/routes');
const cors = require('cors');

const app = express();

app.use(routes);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Listening to port 3000");
})