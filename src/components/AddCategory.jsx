import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //console.log(setCategories())
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    //console.log(inputValue);
  };

  const subirDatos = (event) => {
    event.preventDefault();
    //si en el input no hay caracteres entonces hacer un return y salir de la funcion
    //con un return para evitar que siga ejecutando lo de abajo
    if (inputValue.trim().length <= 1) return;

    //console.log(inputValue);
    onNewCategory(inputValue.trim());
    //limpiar el input
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={subirDatos}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

