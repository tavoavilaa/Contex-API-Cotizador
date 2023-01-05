import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import Spline from '@splinetool/react-spline';

const AppSeguro = () => {

  const { resultado, cargando } = useCotizador()

  return (
    <>
    <header className="my-10">
    <h1 className="text-white text-center text-4xl
    font-black">Cotizador de seguro de autos </h1>
    </header>
    <div className="grid md:grid-cols-2 gap-4 md:px-16 px-8 py-8">
      
      <main className="bg-white shadow
  rounded-lg p-10 drop-shadow-2xl">
        <Formulario />
        {cargando ? <Spinner/> : <Resultado/>}
      </main>
      <div className="">
      <Spline scene="https://prod.spline.design/zBRY5KN6kvMzUYQR/scene.splinecode" />
      </div>
    </div>

    </>
  )
}

export default AppSeguro