import React from "react";
import Background from "../images_site/Background.png";

import "./SheetAcceuil.css";

function SheetAcceuil() {
  return (
    <div className="sheetbackground">
      <img className="sheetimg" src={Background} alt="" />
    </div>
  );
}

export default SheetAcceuil;
