const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/buy", async (req, res) => {
    const response = await axios.post("http://localhost:3001/orders", req.body);
    res.json(response.data);
});

app.listen(3000, () => console.log("API Gateway running"));