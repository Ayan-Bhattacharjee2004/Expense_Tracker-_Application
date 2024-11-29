const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { readdirSync } = require("fs");
const { db } = require("./db/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
readdirSync("./routes").map((route) =>
    app.use("/api/v1", require("./routes/" + route))
);

// Server function
const startServer = () => {
    db(); // Connect to MongoDB
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();
