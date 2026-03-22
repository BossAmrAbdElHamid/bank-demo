const express = require("express");
const app = express();
const orderController = require("./controllers/orderController");

app.use(express.json());

app.post("/orders", (req, res) => orderController.create(req, res));

app.listen(3001, () => console.log("📦 Order Service running on port 3001"));