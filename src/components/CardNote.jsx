import { SquarePen , Trash } from "lucide-react";

//id
export const CardNote = ({titulo, descripcion, fecha }) => {
  return (
    <div className="card bg-base-300 w-full">
  <div className="card-body">
    <h2 className="card-title text-accent font-bold lg:text-2xl">{titulo}</h2>
    <p className='text-amber-50'>
      {descripcion}
    </p>
    <div className="flex justify-between items-center mt-6">
      <time datatime= {fecha}>{fecha}</time>
      <div className='flex gap-4'>
        <SquarePen className='text-while cursor-pointer'></SquarePen>
        <Trash className='text-red-400 cursor-pointer'></Trash>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardNote