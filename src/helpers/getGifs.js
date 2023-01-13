//se llama la funcion y para usar en otro lugar se utiliza export para exportarla
export const getGifs = async (category) => {
  //url de la api
  const url = `https://api.giphy.com/v1/gifs/search?api_key=c3a9c6fYqGpBatTzjgYWKF1ASvkcHH8z&q=${category}&limit=12`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  //se recorre la data y retornamos por cada registro recorrido un objeto en el arreglo gifs
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);

  return gifs;
};
