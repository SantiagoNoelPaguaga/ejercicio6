import React from "react";

export const Card = ({ name, image, infoOrigen }) => {

  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={`Imagen de ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {
          infoOrigen
          ?
          <p>{infoOrigen.dimension}</p>
          :
          <p>Origen desconocido</p>
        }
      </div>
    </div>
  );
};
