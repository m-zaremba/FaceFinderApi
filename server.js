import express from "express";
import cors from "cors";
import handleSignin from "./controllers/signin.js";
import handleSignup from "./controllers/signup.js";
import handleProfileGet from "./controllers/profile.js";
import { handleApiCall, handleImage } from "./controllers/image.js";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "mizar",
    password: "BattojutsU",
    database: "face-finder"
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working");
});
app.post("/signin", handleSignin(db));
app.post("/signup", handleSignup(db));
app.get("/profile/:id", handleProfileGet(db));
app.put("/image", handleImage(db));
app.post("/imageUrl", handleApiCall);

app.listen(process.env.PORT || 3001);
