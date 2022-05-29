const express = require("express");
const Security = require("../models/securityModel")
const router = express.Router();

router.get("/", async(req, res) => {
  try{
      let securityData = await Security.find().sort({ status_update_time: "desc" });
      return res.send(securityData);
  } catch(ex){
      return res.status(500).send("Error: " + ex.message);
  }
}),

  router.post("/", async (req, res) => {
    try {
      let date_ob = new Date();
      var day = ("0" + date_ob.getDate()).slice(-2);
      var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      var year = date_ob.getFullYear();
      var hours = date_ob.getHours();
  
      var minutes = date_ob.getMinutes();
  
      var seconds = date_ob.getSeconds();
  
      var dateTime =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
  
      console.log(dateTime);
      console.log(req.body);
      let security = new Security({
        doorStatus: req.body.doorStatus,
        gasStatus: req.body.gasStatus,
        status_update_time: dateTime,
      });
      security = await security.save();
      res.send(security);
    } catch (ex) {
      return res.status(500).send("Error: " + ex.message);
    }
  });
  
  module.exports = router;