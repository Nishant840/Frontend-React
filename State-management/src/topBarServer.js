import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/details", (req, res) => {
  res.json({
    "networkCount": Math.floor(Math.random() * 110),
    "jobsCount": Math.floor(Math.random() * 110),
    "messageCount": Math.floor(Math.random() * 110),
    "notificationCount": Math.floor(Math.random() * 110),
  });
});

app.listen(3000, () => console.log("Server running"));
