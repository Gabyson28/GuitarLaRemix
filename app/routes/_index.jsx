import React from "react";
import { getGuitarras } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/post.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "./../components/listado-guitarras";
import ListadoPosts from "../components/listado-posts";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesPosts from "~/styles/blog.css";
import styleCurso from "~/styles/curso.css";
import Curso from "../components/curso";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: styleCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;
