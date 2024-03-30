import express from "express";
import router  from "./routes";

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const PORT: number = Number(process.env.PORT) || 3001;
const HOST: string | string = process.env.HOST || "localhost";

const app = express();
app.use(express.urlencoded({ extended : true }));

app.use(express.json());
app.use("/", router);

const startServer = async () => {
    try {
        app.listen(PORT, HOST, () => {
            console.log(`Server running on http://${HOST}:${PORT}`);
        })
    } catch (err) {
        console.log("Error starting server");
        console.log(err);
    }
}

startServer();