import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotaForm from "../components/NotaForm";
import axios from "axios";
import { toast } from "react-toastify";

const apiURL = import.meta.env.VITE_API_URL;

const EditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiURL}/api/notas/${id}`)
      .then((res) => {
        setInitialData({
          titulo: res.data.titulo,
          descripcion: res.data.descripcion,
        });
        setLoading(false);
      })
      .catch(() => {
        toast.error("No se pudo cargar la nota");
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = async (nota) => {
    try {
      await axios.put(`${apiURL}/api/notas/${id}`, nota);
      toast.success("¡Nota actualizada con éxito!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/");
    } catch {
      toast.error("Error al actualizar la nota");
    }
  };

  if (loading) return <div className="text-center text-white mt-10">Cargando...</div>;
  if (!initialData) return <div className="text-center text-red-500 mt-10">Nota no encontrada</div>;

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-8">Editar Nota</h1>
      <NotaForm initialDate={initialData} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditNotePage;