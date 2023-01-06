import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import Spline from '@splinetool/react-spline';
import EmptyState from "./EmptyState";

const AppSeguro = () => {

  const { resultado, cargando, datos } = useCotizador()

  const {marca} = datos


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
        {
          !marca &&<EmptyState/>
        }
        {
         marca == 1 ? <Spline scene="https://prod.spline.design/3lIMKCetDclEKNep/scene.splinecode" /> : ""
        }
        {
          marca == 2 ? <Spline scene="https://prod.spline.design/k2A41ZcUeCKZpNnB/scene.splinecode" /> : ""
        }
        {
          marca == 3 ? <Spline scene="https://prod.spline.design/O1N5DS4zjXQTuNdt/scene.splinecode" /> : ""
        }
      </div>
    </div>

    </>
  )
}

export default AppSeguro