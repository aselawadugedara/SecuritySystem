const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
  doorStatus: {
    type: String,
    required: true,
  },
  gasStatus: {
    type: String,
    required: true,
  },
  status_update_time: {
    type: Date,
    required: true,
  },
});

const Security = mongoose.model("Security", securitySchema);
module.exports = Security;
