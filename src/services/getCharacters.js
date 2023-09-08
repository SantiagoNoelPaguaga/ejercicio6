
export const getCharacters = async( url ) => {
  
  const respuesta = await fetch( url );

  const data = await respuesta.json();

  return data;

}
