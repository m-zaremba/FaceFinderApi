import express from "express";

const app = express();

app.use(express.json());

const db = {
  users: [
    {
      id: "123",
      name: "Corvo",
      email: "corvo_attano@carnacca.ry",
      password: "dishonored",
      entries: 0,
      joined: new Date()
    },
    {
      id: "234",
      name: "Emily",
      email: "emily_caldvin@carnacca.ry",
      password: "farReach",
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === db.users[0].email &&
    req.body.password === db.users[0].password
  ) {
    res.json("logged in");
  } else {
    res.status(404).json("wrong emil or password");
  }
});

app.post("/signup", (req, res) => {
  const { email, password, name } = req.body;
  db.users.push({
    id: "345",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(db.users[db.users.length - 1]);
});

app.listen(3000);
