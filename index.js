const express = require('express');
const routes = require('./config/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes)

try {
    app.listen(8000, () => {
        console.log("Listening to port 8000");
    })
} catch (error) {
    console.log(error)
}