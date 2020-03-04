import Clarifai from "clarifai";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config();

const API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const app = new Clarifai.App({
  apiKey: API_KEY
});

export const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json("Unable to work with the API"));
};

export const handleImage = db => (req, res) => {
  const { id } = req.body;

  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(404).json("Unable to update entries"));
};
