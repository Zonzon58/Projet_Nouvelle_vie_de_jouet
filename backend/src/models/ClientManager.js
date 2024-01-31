const AbstractManager = require("./AbstractManager");

class ClientManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "Client" as configuration
    super({ table: "client" });
  }

  // The C of CRUD - Create operation

  async create(Client) {
    // Execute the SQL INSERT query to add a new Client to the "Client" table
    const [result] = await this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, code_postal, localite) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        Client.nom,
        Client.prenom,
        Client.email,
        Client.password,
        Client.adresse,
        Client.code_postal,
        Client.localite,
      ]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Client by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Client
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Clients from the "Client" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Clients
    return rows;
  }

  async readselectAll() {
    // Execute the SQL SELECT query to retrieve all Candidats from the "Candidat" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where selectionne = true`
    );

    // Return the array of Candidats
    return rows;
  }
}

module.exports = ClientManager;
