import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
    const Id = req.query.id;
    res.json({
        todo:{
            id:Id,
            title:"Todo " + Id,
            description: "This is todo "+Id
        }
    });
});

app.listen(3000, () => console.log("Server running"));
