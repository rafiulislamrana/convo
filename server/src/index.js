import express from "express";

import authRoutes from "../src/routes/auth.route.js"

const app = express(); 

app.use("/api/auth", authRoutes)

app.listen(5001, () => {
    console.log("This server is running on port 5001");
})