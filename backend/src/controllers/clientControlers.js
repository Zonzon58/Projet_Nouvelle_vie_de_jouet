// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all clients from the database
    const clients = await tables.client.readAll();

    // Respond with the clients in JSON format
    res.json(clients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The B of BREAD - Browse (Read All) operation
const retenu = async (req, res, next) => {
  try {
    // Fetch all clients from the database
    const clients = await tables.client.readselectAll();

    // Respond with the clients in JSON format
    res.json(clients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific client from the database based on the provided ID
    const client = await tables.client.read(req.params.id);

    // If the client is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the client in JSON format
    if (client.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(client);
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
  // Extract the client data from the request body
  const client = req.body;

  try {
    // Insert the client into the database
    const insertId = await tables.client.create(client);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted client
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
  retenu,
};
