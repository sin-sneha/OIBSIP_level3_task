const express = require("express");

const Pizza = require('./models/pizzaModel')


const app = express();
const db = require("./db.js")
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.get("/",(req, res) => {
    res.send("server working" + port);
});

const port = process .env.PORT || 8000;


// Start the server
app.listen(port, () => 'Server running on port');
