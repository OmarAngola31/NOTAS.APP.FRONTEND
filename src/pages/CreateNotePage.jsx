import NotaForm from "../components/NotaForm"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
console.log(import.meta.env.VITE_API_URL)

const CreateNotePage = () => {
  const navigate = useNavigate();
  const handlCreated = async (nota) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/notas`, nota)
      .then(res => {
        if(res.status !== 201){
          throw new Error("Error al agregar una Nota")
        }
        toast.success("¡Nota creada con exito", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored",
        });
        navigate("/");
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
        <NotaForm onSubmit={handlCreated} initialDate={{titulo:"",descripcion:"" }}/>
    </div>
  )
}

export default CreateNotePage
