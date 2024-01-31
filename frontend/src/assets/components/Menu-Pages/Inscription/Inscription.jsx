import React, { useState } from "react";
import connexion from "../../../../services/connexion";

import "./Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    adresse: "",
    code_postal: "",
    localite: "",
  });

  const handleInputChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/clients`,
        formData
      );

      if (response.data) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setFormData(formData);
    }
  };

  return (
    <div>
      {/* <img className="insc-logo" src={logo} alt="logo" /> */}
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Votre inscription a été prises en compte.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Votre inscription pas pu être enregistré.
        </p>
      </div>
      <div className="Inscription">
        <form onSubmit={handleUpload} className="Inscriptionform">
          <input
            className="classinput"
            type="text"
            name="nom"
            placeholder="NOM"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="prenom"
            placeholder="PRENOM"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="email"
            name="email"
            placeholder="MAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="password"
            placeholder="MOT DE PASSE"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="adresse"
            placeholder="ADRESSE "
            value={formData.adresse}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="code_postal"
            placeholder="CODE_POSTAL"
            value={formData.code_postal}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="localite"
            placeholder="LOCALITE"
            value={formData.localite}
            onChange={handleInputChange}
            required
          />

          <div className="containbutsubmit">
            <button type="submit" className="classbut">
              SOUMETTRE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
