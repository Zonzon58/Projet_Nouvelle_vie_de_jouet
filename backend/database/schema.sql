-- Active: 1701637700877@@127.0.0.1@3306@nouvelle_vie_de_jouet
CREATE TABLE category (
    id int primary key auto_increment not null, name varchar(255) not null
);

create table activite (
    id int primary key auto_increment not null, name varchar(255) not null
);

CREATE TABLE matiere (
    id int primary key auto_increment not null, name VARCHAR(150) NOT NULL, alimentation VARCHAR(150), qualite VARCHAR(150)
);

create table jouet (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, nom VARCHAR(500) NOT NULL, Description VARCHAR(500) NOT NULL, age INTEGER NOT NULL, couleur_dominante VARCHAR(255) NOT NULL, fabricant VARCHAR(255) NOT NULL, tarif INT NOT NULL, category_id INT NOT NULL, activite_id INT NOT NULL, matiere_id INT NOT NULL, FOREIGN KEY (category_id) REFERENCES category (id), FOREIGN KEY (activite_id) REFERENCES activite (id), FOREIGN KEY (matiere_id) REFERENCES matiere (id)
);

CREATE TABLE client (
    id int unsigned primary key auto_increment not null, nom VARCHAR(150) NOT NULL, prenom VARCHAR(150) NOT NULL, email VARCHAR(255) not NULL, password VARCHAR(255) NOT NULL, adresse VARCHAR(500) NOT NULL, code_postal INT NOT NULL, localite VARCHAR(255) NOT NULL
);

INSERT INTO category (name) VALUES ("Dévelopement");

INSERT INTO category (name) VALUES ("Jeu de société");

INSERT INTO category (name) VALUES ("Multimédia");

INSERT INTO category (name) VALUES ("Bibliothèque");

INSERT INTO
    category (name)
VALUES ("Jeux et jouets d'extérieur");

INSERT INTO activite (name) VALUES ("Jeux d'activites");

INSERT INTO activite (name) VALUES ("Jeux en bois");

INSERT INTO activite (name) VALUES ("Figurines");

INSERT INTO activite (name) VALUES ("voitures");

INSERT INTO activite (name) VALUES ("Puzzle");

INSERT INTO activite (name) VALUES ("Carte Pokemon");

INSERT INTO activite (name) VALUES ("Jeux de cartes");

INSERT INTO activite (name) VALUES ("Console");

INSERT INTO activite (name) VALUES ("Jeux vidéo");

INSERT INTO activite (name) VALUES ("Livre pour bébé");

INSERT INTO activite (name) VALUES ("Livre scolaire");

INSERT INTO activite (name) VALUES ("Comtes");

INSERT INTO activite (name) VALUES ("Vélo et trottinettes");

INSERT INTO activite (name) VALUES ("Draisiennes et tricycles");

INSERT INTO activite (name) VALUES ("Balles et ballons");

INSERT INTO matiere (name) VALUES ("Bois");

INSERT INTO matiere (name) VALUES ("Plastique");

INSERT INTO matiere (name) VALUES ("Métal et Plastique");

INSERT INTO matiere (name) VALUES ("Carton");

INSERT INTO matiere (name) VALUES ("Tissus");

--     INSERT INTO jouet(Nom, Category_id, activite_id, matiere_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
-- , 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
-- ,Montessori, 5,00 €),
--     INSERT INTO jouet(Nom, Category_id, activite_id, matiere_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
-- , 1, 2, 1, Puzzle en bois animaux, Puzzle en bois avec des animaux Il est en bon état pas de soucis derrière quelques taches A partir de 10 mois c_est écrit bon en vrai on sait qu'il n'y a pas d'âge car c_est suivant les enfants, 6 - 12 mois,	Bois,	Ningbo,	1,50 €
-- ),
--     INSERT INTO jouet(Nom, Category_id, activite_id, matiere_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
-- , 1, 3, 2, My littlest petshop chien épagneul 1318,	Chien epagneul 1318 Deux points de stylo bleu en dessous d une oreille visible que lorsqu on le retourne Manque de la peinture sur la truffe et un trait jaune marron au dessus de la tête Chien epagneul Bon état ( si defaults ils sont noté au dessus) petit nettoyage à prévoir, à partir de 18 mois,	Brun,	Hasbro,	2,50 €
-- ),
--     INSERT INTO jouet(Nom, Category_id, activite_id, matiere_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
-- , 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
-- ,Montessori, 5,00 €),
--     INSERT INTO jouet(Nom, Category_id, activite_id, matiere_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
-- , 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
-- ,Montessori, 5,00 €),

--  "),