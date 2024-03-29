// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all bibliotheques from the database
    const bibliotheques = await tables.bibliotheque.readAll();
    // Respond with the bibliotheques in JSON format
    res.status(200).json(bibliotheques);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific video from the database based on the provided ID
    const bibliotheque = await tables.bibliotheque.read(req.params.id);

    // If the bibliotheque is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the bibliotheque in JSON format
    if (bibliotheque == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(bibliotheque);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the bibliotheque data from the request body
  const bibliotheque = req.body;

  try {
    // Insert the bibliotheque into the database
    const insertId = await tables.bibliotheque.create(bibliotheque);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted bibliotheque
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
