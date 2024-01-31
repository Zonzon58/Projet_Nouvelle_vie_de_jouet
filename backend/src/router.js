const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const clientControllers = require("./controllers/clientControlers");
const contactControllers = require("./controllers/contactControllers");
// const connexionControllers = require("/controllers/connexionControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

router.get("/clients", clientControllers.browse);

router.get("/clients/:id", clientControllers.read);

router.get("/retenu", clientControllers.retenu);

// Route to add a new item
router.post("/items", itemControllers.add);

router.post("/clients", clientControllers.add);

router.post("/contact", contactControllers.send);
// router.post("/connexion", connexionControllers.log);

module.exports = router;
