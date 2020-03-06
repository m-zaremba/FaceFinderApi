const express = require("express");
const cors = require("cors");
const knex = require("knex");
const signup = require("./controllers/signup");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working");
});
app.post("/signin", signin.handleSignin(db));
app.post("/signup", signup.handleSignup(db));
app.get("/profile/:id", profile.handleProfileGet(db));
app.put("/image", image.handleImage(db));
app.post("/imageUrl", image.handleApiCall);

app.listen(process.env.PORT || 3001, () => {
  console.log(`App is running on port: ${process.env.PORT}`);
});
