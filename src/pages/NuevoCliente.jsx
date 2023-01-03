import {useNavigate, Form, useActionData, redirect} from 'react-router-dom'
import { Formulario } from '../components/Formulario'
import {Error} from '../components/Error'
import { añadirCliente} from '../../data/clientes'


export async function accion({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  const errores = []

  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email es obligatorio')
  }

  if(Object.keys(errores).length){
    return errores
  }

  await añadirCliente(datos)

  return redirect('/')
}


export const NuevoCliente = () => {


  const errores = useActionData()

  const navigation = useNavigate()
  return (
   <div>
      <h1 className='text-4xl font-bold text-blue-900'>CRM - Clientes</h1>
      <p className="mt-5">Añade nuevos clientes</p>
      <div className='flex justify-end'>
        <button 
          className='bg-blue-900 text-white px-4 py-2 rounded'
          onClick={() => navigation('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 px-5 py-10 mt-20 m-auto '>

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form noValidate method='post'>
          <Formulario />
          <input
            type='submit'
            className='bg-blue-900 text-white px-4 py-2 rounded'
            value="Añadir cliente"
          />
        </Form>
      </div>
   </div>
  )
}
