const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hola, desde le backend NodeJS Express");
});

app.get('/saludo', (req, res) => {
    res.json({
        "mensaje": "Hola, desde le backend NodeJS Express"
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
