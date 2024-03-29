import express from "express";
import router  from "./routes";

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const PORT: number | string = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended : true }));

app.use(express.json());
app.use("/", router);

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    } catch (err) {
        console.log("Error starting server");
        console.log(err);
    }
}

startServer();