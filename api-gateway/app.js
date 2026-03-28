const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/buy", async (req, res) => {
    try {
        console.log("API Gateway received request:", req.body);
        const response = await axios.post("http://order-service:3001/orders", req.body);
        console.log("Order Service response:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("API Gateway error:", error.message);
        res.status(500).json({ 
            error: "Failed to process order",
            details: error.message 
        });
    }
});

app.listen(3000, () => console.log("API Gateway running on port 3000"));