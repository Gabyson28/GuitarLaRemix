import React from "react";
import Guitarra from "./guitarra";
export default function ListadoGuitarras({guitarras }) {
  return (
    <>
      <h2 className="heading">Nuestra Colleción</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra guitarra={guitarra?.attributes} key={guitarra?.id} />
          ))}
        </div>
      )}
    </>
  );
}
