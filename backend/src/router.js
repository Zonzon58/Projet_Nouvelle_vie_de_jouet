const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const clientControllers = require("./controllers/clientControlers");
const contactControllers = require("./controllers/contactControllers");
const bibliothequeControllers = require("./controllers/bibliothequeControllers");
// const connexionControllers = require("/controllers/connexionControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

router.get("/bibliotheques", bibliothequeControllers.browse);

router.get("/clients", clientControllers.browse);

router.get("/retenu", clientControllers.retenu);
// Route to get by ID
router.get("/items/:id", itemControllers.read);

router.get("/bibliotheques/:id", bibliothequeControllers.read);

router.get("/clients/:id", clientControllers.read);
// route to post
router.post("/items", itemControllers.add);

router.post("/bibliotheques", bibliothequeControllers.add);

router.post("/clients", clientControllers.add);

router.post("/contact", contactControllers.send);

module.exports = router;
