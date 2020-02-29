import express from "express";
import bcrypt from "bcryptjs";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

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
  ],
  login: [
    {
      id: "999",
      hash: "",
      email: "corvo_attano@carnacca.ry"
    }
  ]
};

app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/signin", (req, res) => {
  // bcrypt.compare(
  //   req.body.password,
  //   "$2a$10$y5p9JgLUrvrFGKaVztsPmutrpj0GnS9VBbKUaLvc09VI5EGBPErg2", // whalers
  //   function(err, res) {
  //     if (res === true) {
  //       console.log("password correct");
  //     } else {
  //       console.log("wrong password");
  //     }
  //   }
  // );
  
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

  // bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash(password, salt, function(err, hash) {
  //     console.log(hash);
  //     // Store hash in your password DB.
  //   });
  // });

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

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let userFound = false;

  db.users.forEach(user => {
    if (user.id === id) {
      userFound = true;
      return res.json(user);
    }
  });
  if (!userFound) {
    res.status(404).json("no such user");
  }
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  let userFound = false;

  db.users.forEach(user => {
    if (user.id === id) {
      userFound = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!userFound) {
    res.status(404).json("no such user");
  }
});

app.listen(3001);
