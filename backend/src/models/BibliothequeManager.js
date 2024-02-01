const AbstractManager = require("./AbstractManager");

class bibliothequeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "bibliotheque" as configuration
    super({ table: "bibliotheque" });
  }

  // The C of CRUD - Create operation

  async create(bibliotheque) {
    // Execute the SQL INSERT query to add a new bibliotheque to the "bibliotheque" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [bibliotheque.name]
    );

    // Return the ID of the newly inserted bibliotheque
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific bibliotheque by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the bibliotheque
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all bibliotheques from the "bibliotheque" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of bibliotheques
    return rows;
  }
}

module.exports = bibliothequeManager;
