import { useEffect, useState } from "react";
import CardNote from "../components/CardNote";
import axios from "axios";
import formatData from "../utils/formatDate";
const apiURL = import.meta.env.VITE_API_URL;

export const HomePage = () => {
  const [notas, setNotas] = useState([]);
  const [loading, setLoanding] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notas`);
        setNotas(response.data)
        setLoanding(false)
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if(loading) return <span>Cargando</span>

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 xl:rid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
      {notas.map(nota => (
        <CardNote
        key={nota._id}
        titulo={nota.titulo}
        descripcion={nota.descripcion}
        id={nota._id}
        fecha={formatData(nota.createdAt)}
        />
      ))}
    </div>
  );
};

export default HomePage;
