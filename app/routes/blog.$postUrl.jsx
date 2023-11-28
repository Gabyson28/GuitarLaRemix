import React from "react";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/post.server";
import { formatearFecha } from "../utils/helpers";

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: "GuitarLA - Blog no encontrado",
      },
    ];
  }

  const nombre = data.data[0].attributes.titulo;
  return [
    {
      title: `GuitarLA - ${nombre}`,
    },
  ];
}

export async function loader({ params }) {
  const { postUrl } = params;

  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }

  return post;
}

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className="contenedor post mt-3">
      <img src={imagen.data.attributes.url} alt="Imagen" className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}

export default Post;
