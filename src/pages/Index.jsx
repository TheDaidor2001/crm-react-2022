import { useLoaderData } from 'react-router-dom'
import { Cliente } from '../components/Cliente';
import { getClientes } from '../../data/clientes';


export async function loader() {
  
  const clientes = await getClientes()

  return clientes
}

export const Index = () => {

  const clientes = useLoaderData()



  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-blue-900'>CRM - Clientes</h1>
      <p className="mt-5">Administra tus clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-10 table-auto'>
          <thead className=''>
            <tr className='bg-blue-900 text-white'>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ):
        <p>Todavñia no hay clientes</p>
      }
    </div>
  )
}
