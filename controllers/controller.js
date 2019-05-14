const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["name", "devour"], [req.body.name, false], function(result){
        res.json({ id: result.insertId})
    })
})

module.exports = router;