import React, { useState } from "react";
import connexion from "../../../../services/connexion";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
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
    <div className="div-formcontact">
      <div>
        <p style={{ display: "none" }}>
          Votre inscription a été prises en compte.
        </p>
        <p style={{ display: "none" }}>
          Votre inscription pas pu être enregistré.
        </p>
      </div>
      <div className="div-formcontact">
        <form onSubmit={handleUpload} className="form-forcontact">
          <input
            className="input-formcontact"
            type="text"
            name="nom"
            placeholder="NOM"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-formcontact"
            type="text"
            name="prenom"
            placeholder="PRENOM"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-formcontact"
            type="email"
            name="email"
            placeholder="MAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-formcontact"
            type="textarea"
            name="subject"
            placeholder="VOTRE SUJET"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-formcontact"
            type="textarea"
            name="message"
            placeholder="ICI VOTRE MESSAGE"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <div className="form-submit">
            <button type="submit" className="form-button">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
