const mongoose = require("mongoose");

// Mongoose Schema defines the structure of the enquiry model.
// Schemas allow for CRUD operations to be performed
const DisplaySchema = mongoose.Schema({
  displayMessage: {
    type: String,
    required: true, // this means that when a new instance of the model is created, it is mandatory to have a value for this field
  },
});

module.exports = mongoose.model("Display", DisplaySchema);
