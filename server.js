import express from "express";
import cors from "cors";
import handleSignin from "./controllers/signin.js";
import handleSignup from "./controllers/signup.js";
import handleProfileGet from "./controllers/profile.js";
import {handleApiCall, handleImage} from "./controllers/image.js";
// Allow the use of 'require' in ESM
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const knex = require("knex");

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
  res.send(db.users);
});
app.post("/signin", handleSignin(db));
app.post("/signup", handleSignup(db));
app.get("/profile/:id", handleProfileGet(db));
app.put("/image", handleImage(db));
app.post("/imageUrl", handleApiCall);

app.listen(3001);
