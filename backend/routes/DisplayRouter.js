
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
// importing mongodb schema
const Display = require("../Schemas/DisplaySchema");


// get display message from mongodb

router.get("/Display", async (req, res) => {
  try {
    // find() -> get all the data
    const getDisplayMessage = await Display.find();
    res.json(getDisplayMessage);
  } catch (err) {
    res.json({ message: err });
  }
});

//post display message to mongodb
router.post("/Display", async (req, res) => {
  const  postDisplayMessage = new Display({
    displayMessage: req.body.displayMessage,
    

  });
  console.log(postDisplayMessage);
  try {
    const savedPost = await postDisplayMessage.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;