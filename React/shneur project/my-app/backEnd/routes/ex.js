const router = require("express").Router();
let Ex = require("../models/ex.model");

router.route("/").get((req, res) => {
    Ex.find()
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json("Eror: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username
    const phoneNumber = Number(req.body.phoneNumber)
    const email = req.body.email
  
    const newEx = new Ex({
        username,
        phoneNumber,
        email
    });
    newEx.save()
        .then(() => res.json("ex added"))
        .catch(err => res.status(400).json("Eror: " + err));
});

module.exports = router;