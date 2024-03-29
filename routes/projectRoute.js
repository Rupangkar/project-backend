const express = require('express');

//router
const router = express.Router();

//GET all projects
router.get("/", (req, res) =>{
    res.json({massege: "GET all project"});
})

//GET a single project
router.get("/:id", (req, res) =>{
    res.json({message: "GET a single project" });
})
//POST a new  project
router.post("/", (req, res) =>{
    res.json({message: "POST a new project" });
})
//DELETE a  project
router.delete("/:id", (req, res) =>{
    res.json({message: "DELETE a  project" });
})
//UPDATE a  project
router.patch("/:id", (req, res) =>{
    res.json({message: "PATCH a new project" });
})


module.exports = router;

