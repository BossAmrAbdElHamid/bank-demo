const express = require("express");
const axios = require("axios");

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("login"));

app.get("/dashboard", (req, res) => res.render("dashboard"));

app.get("/buy", (req, res) => res.render("buy"));

app.post("/buy", async (req, res) => {
    try {
        await axios.post("http://localhost:3000/buy", {
            userId: "1",
            productId: req.body.productId,
            quantity: 10
        });
        res.send("Purchase Successful");
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(`Purchase Failed: ${error.message}`);
    }
});

app.listen(4000, () => console.log("Frontend running"));