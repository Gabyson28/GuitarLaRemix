import React from "react";
import { Link } from "@remix-run/react"; 
import { formatearFecha } from "../utils/helpers";
function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt="Imagen"
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
      </div>
      <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
    </article>
  );
}

export default Post;
