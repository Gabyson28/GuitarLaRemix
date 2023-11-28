export async function getGuitarras() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const resultado = await response.json();
  
  return resultado;
}

export async function getGuitarra(param) {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${param}&populate=imagen`
  );
  const result = await response.json();
 

  return result
}
