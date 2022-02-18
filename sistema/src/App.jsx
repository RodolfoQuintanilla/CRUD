import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layauot/Layout';
import EditarNuevoCliente from './paginas/EditarNuevoCliente';
import Inicio from './paginas/Inicio';
import NuevoCliente from './paginas/NuevoCliente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        <BrowserRouter>
          <Routes>
            <Route path='/clientes' element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path='nuevo' element={<NuevoCliente />} />
              <Route path='editar/:id' element={<EditarNuevoCliente />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </h1>
    </>
  )
}

export default App
