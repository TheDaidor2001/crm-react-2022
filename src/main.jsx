import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { Layout } from './components/Layout'
import { Index, loader as loaderClientes } from './pages/Index'
import { NuevoCliente, accion as ClienteAccion } from './pages/NuevoCliente'
import { EditarCliente, loader as LoaderCliente, accion as AccionCliente } from './pages/EditarCliente'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        element: <Index />,
        index: true,
        loader: loaderClientes
        
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: ClienteAccion

      },
     {
        path: 'clientes/editar/:id',
        element: <EditarCliente />,
        loader: LoaderCliente,
        accion: AccionCliente
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
