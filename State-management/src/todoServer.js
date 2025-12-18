import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
    const randomId = Math.floor(Math.random()*10);
  res.json({
    todo:{
        id:randomId,
        title:"Todo " + randomId,
        description: "This is todo "+randomId
    }
  });
});

app.listen(3000, () => console.log("Server running"));
