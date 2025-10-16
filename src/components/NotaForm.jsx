import { useEffect, useState } from "react";

const NotaForm = ({onSubmit, initialDate}) => {
  const [nota, setNotas] = useState(initialDate);

  useEffect( () => {
    setNotas[initialDate]
  },[initialDate]);

  const handleChange = (e) => {
    setNotas({
      ...nota,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nota);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10">
      <input
        className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
        placeholder="Titulo"
        type="text"
        id="titulo"
        name="titulo"
        value={nota.titulo}
        onChange={handleChange}
        required
      />
      <textarea
        className="input lg:input-lg resize-y mb-0 w-full focus:outline-0 border-0 "
        name="descripcion"
        id="descripcion"
        value={nota.descripcion}
        onChange={handleChange}
        placeholder="Descripcion de la tarea"
        required
      ></textarea>
      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  );
};

export default NotaForm;
