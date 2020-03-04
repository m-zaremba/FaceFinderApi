const handleImage = (db) => (req, res) => {
    const { id } = req.body;
  
    db("users")
      .where("id", "=", id)
      .increment("entries", 1)
      .returning("entries")
      .then(entries => {
        res.json(entries[0]);
      })
      .catch(err => res.status(404).json("Unable to update entries"));
  }

  export default handleImage;