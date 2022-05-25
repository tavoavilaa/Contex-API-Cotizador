import AppSeguro from "./components/AppSeguro";

import {CotizadorProvider} from "./context/CotizadorProvider"
import './App.css'

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
