import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import keys from "../lib/keys";

const {server} = keys;
const app = express();

app.set("port", server.port);
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//routing
app.use("/", routes);

export default app;
