-- Active: 1701637700877@@127.0.0.1@3306@nouvelle_vie_de_jouet
CREATE TABLE
    category (
        id int unsigned primary key auto_increment not null,
        categorie varchar(255) not null
    );

create table
    activité (
        id int unsigned primary key auto_increment not null,
        famille varchar(255) not null
    );

    CREATE TABLE
    matiere (
        id int unsigned primary key auto_increment not null,
        matiere VARCHAR(150) NOT NULL,
        alimentation VARCHAR(150) NOT NULL,
        qualite VARCHAR(150) NOT NULL
    );

create table
    jouet (
        id int unsigned primary key auto_increment not null,
        categorie_id int NOT NULL,
        activite_id INT NOT NULL,
        libelle varchar(150) not null,
        Description varchar(500) not NULL,
        age varchar(50) NOT NULL,
        couleur_dominante varchar(100) NOT NULL,
        fabricant vachar(150) not NULL,
        matiere_id int NOT NULL,
        tarif INT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES category(id),
        FOREIGN KEY (activite_id) REFERENCES activité(id),
        FOREIGN KEY (matière_id) REFERENCES matiere(id),
    );


CREATE TABLE
    client (
        id int unsigned primary key auto_increment not null,
        nom VARCHAR(150) NOT NULL,
        prenom VARCHAR(150) NOT NULL,
        email VARCHAR(255) not NULL,
        Password VARCHAR(255) NOT NULL,
        adresse VARCHAR(500) NOT NULL,
        code_postal INT NOT NULL,
        localité VARCHAR(255) NOT NULL
    );


    INSERT INTO category(name) VALUES("Dévelopement"),
    INSERT INTO category(name) VALUES("Jeu de société"),
    INSERT INTO category(name) VALUES("Multimédia"),
    INSERT INTO category(name) VALUES("Bibliothèque"),
    INSERT INTO category(name) VALUES("Jeux et jouets d'extérieur");


    INSERT INTO activité(name) VALUES("Jeux d'activités"),
    INSERT INTO activité(name) VALUES("Jeux en bois"),
    INSERT INTO activité(name) VALUES("Figurines"),
    INSERT INTO activité(name) VALUES("voitures"),
    INSERT INTO activité(name) VALUES("Puzzle"),
    INSERT INTO activité(name) VALUES("Carte Pokemon"),
    INSERT INTO activité(name) VALUES("Jeux de cartes"),
    INSERT INTO activité(name) VALUES("Console"),
    INSERT INTO activité(name) VALUES("Jeux vidéo"),
    INSERT INTO activité(name) VALUES("Livre pour bébé"),
    INSERT INTO activité(name) VALUES("Livre scolaire"),
    INSERT INTO activité(name) VALUES("Comtes"),
    INSERT INTO activité(name) VALUES("Vélo et trottinettes"),
    INSERT INTO activité(name) VALUES("Draisiennes et tricycles"),
    INSERT INTO activité(name) VALUES("Balles et ballons");


    INSERT INTO matière(name) VALUES("Bois"),
    INSERT INTO matière(name) VALUES("Plastique"),
    INSERT INTO matière(name) VALUES("Métal et Plastique"),
    INSERT INTO matière(name) VALUES("Carton"),
    INSERT INTO matière(name) VALUES("Tissus");

    INSERT INTO jouet(Nom, Category_id, Activité_id, Matière_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
, 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
,Montessori, 5,00 €),
    INSERT INTO jouet(Nom, Category_id, Activité_id, Matière_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
, 1, 2, 1, Puzzle en bois animaux, Puzzle en bois avec des animaux Il est en bon état pas de soucis derrière quelques taches A partir de 10 mois c_est écrit bon en vrai on sait qu'il n'y a pas d'âge car c_est suivant les enfants, 6 - 12 mois,	Bois,	Ningbo,	1,50 €
),
    INSERT INTO jouet(Nom, Category_id, Activité_id, Matière_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
, 1, 3, 2, My littlest petshop chien épagneul 1318,	Chien epagneul 1318 Deux points de stylo bleu en dessous d une oreille visible que lorsqu on le retourne Manque de la peinture sur la truffe et un trait jaune marron au dessus de la tête Chien epagneul Bon état ( si defaults ils sont noté au dessus) petit nettoyage à prévoir, à partir de 18 mois,	Brun,	Hasbro,	2,50 €
),
    INSERT INTO jouet(Nom, Category_id, Activité_id, Matière_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
, 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
,Montessori, 5,00 €),
    INSERT INTO jouet(Nom, Category_id, Activité_id, Matière_id, Description, Age, Couleur_dominante, Fabricant  ) VALUES("Jouet potager en bois Montessori
, 1, 1, 1, Jouet avec trous se différentes tailles et profondeurs. Légumes (champignon, carotte, patate douce, radis blanc, ananas, betterave et canne à sucre) à encastrer. Les fans de légumes aident à une meilleure préhension. Jouet robuste et en très bon état., 12 - 24 mois, Vert
,Montessori, 5,00 €),


 
 "),

