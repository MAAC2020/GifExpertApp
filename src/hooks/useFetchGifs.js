import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";

//custom hook personalizado
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //funcion para obtener las imagenes
  const getImages = async () => {
    const newImages = await getGifs(category);

    setImages(newImages);
    //console.log(newImages);
    setIsLoading(false);
  };

  //una vez esta montado el componente ejecutar el llamado a la api una unica vez y evitar que este se vuelva a renderizar mas de una vez
  useEffect(() => {
    // getGifs(category);
    getImages(category);
    console.log("EJECUTADO 1 VEZ GIF GRID");
    console.log("CATEGORIA GIF GRID", category);
  }, [category]);

  return {
    images,
    isLoading,
  };
};
