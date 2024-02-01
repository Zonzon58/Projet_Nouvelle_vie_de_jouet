-- Créer la table
CREATE TABLE category (
  id INT PRIMARY KEY,
  nom VARCHAR(50)
);

-- Insérer les données
INSERT INTO category (id, nom) VALUES
(1, 'Dévelopement'),
(2, 'Jeux de societe'),
(4, 'Multimédia'),
(5, 'Bibliothèque'),
(3, 'Jeux et jouets d extérieur');

CREATE TABLE client (
  nom VARCHAR(50) NOT NULL,
  prenom VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  adresse VARCHAR(200) NOT NULL,
  code_postal VARCHAR(10) NOT NULL,
  localite VARCHAR(50) NOT NULL
);

