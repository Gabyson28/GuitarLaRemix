import React from "react";
import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";


export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description: "Venta de guitarras",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen" />
        <div>
          <p>
            Curabitur convallis eros ut hendrerit dictum. Donec sit amet diam
            nec purus viverra cursus. Donec vitae tincidunt arcu. Phasellus
            condimentum libero sem, et vehicula diam pulvinar sed. Ut ut luctus
            leo. Donec malesuada sapien quam, a pellentesque nulla sagittis sed.
            Nunc convallis convallis metus ut molestie. Proin pharetra suscipit
            bibendum. Integer dictum, ligula ac luctus pulvinar, tellus lorem
            rutrum sem, at tincidunt leo purus ut enim.
          </p>
          <p>
            Curabitur convallis eros ut hendrerit dictum. Donec sit amet diam
            nec purus viverra cursus. Donec vitae tincidunt arcu. Phasellus
            condimentum libero sem, et vehicula diam pulvinar sed. Ut ut luctus
            leo. Donec malesuada sapien quam, a pellentesque nulla sagittis sed.
            Nunc convallis convallis metus ut molestie. Proin pharetra suscipit
            bibendum. Integer dictum, ligula ac luctus pulvinar, tellus lorem
            rutrum sem, at tincidunt leo purus ut enim.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
