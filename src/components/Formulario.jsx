import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador ()

    const handleSubmit = e  => {
      e.preventDefault()

      if (Object.values(datos).includes('')) {

          setError('Todos los campos son obligatorios')
          return
      }  

      setError('')

      cotizarSeguro()


    }
  

  return (
     <>

        {error && <Error />}
        <form 
            action=""
            onSubmit={handleSubmit}
            >
            <div className='my-5 rounded-lg'>
                <label className="block mb-3 font-bold
                text-indigo-500 uppercase">
                    Marca
                </label>
                <select
                    name="marca"
                    className="w-full p-4 bg-white border
                    border-gray-200 rounded-lg "
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.marca}
                >   
                    <option value="">-- Selecciona Marca--</option> 
                    {
                        MARCAS.map(marca => (
                            
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))
                    }            I
                </select>
            </div>


            <div className='my-5 rounded-lg'>
                <label className="block mb-3 font-bold
                text-indigo-500 uppercase">
                    Año
                </label>
                <select
                    name="year"
                    className="w-full p-4 bg-white border rounded-lg
                    border-gray-200"
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.year}
                >   
                    <option value="">-- Selecciona Año--</option> 
                    {
                        YEARS.map(year => (
                            
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))
                    }            I
                </select>
            </div>

            <div className='my-5'>
                <label className="block mb-3 font-bold
                text-indigo-500 uppercase">
                    Elige un Plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan => (
                        <Fragment
                            key={plan.id}
                        >
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id} 
                                onChange={ e => handleChangeDatos(e) }
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input 
            
            type="submit"
            className='w-full bg-amber-300 hover:bg-amber-400 transition-colors
              text-black cursor-pointer p-3 uppercase font-bold rounded-lg'
            value='cotizar'
            />
        </form>
     </>
  )
}

export default Formulario