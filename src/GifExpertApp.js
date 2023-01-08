import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  console.log("CATEGORIAS GIFEXPERRT APP", categories);
  //añadir categoria
  const onAddCategory = (newCategory) => {
    //validar si en caterogia no existe la palabra introducida en el
    //componente hijo
    if (!categories.find((el) => el === newCategory)) {
      //console.log(newCategory);
      setCategories([newCategory, ...categories]);
    }
  };

  // console.log("RENDERIZANDO CATEGORIAS", categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* {categories.map((el) => console.log("CATEGORIA RENDERIZADA", el))} */}
      {categories.map((category, index) => (
        <GifGrid key={index} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
