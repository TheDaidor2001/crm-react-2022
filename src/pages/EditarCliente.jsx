import {useActionData, useLoaderData, Form, useNavigate, redirect} from 'react-router-dom'
import {obtenerCliente, editarCliente} from '../../data/clientes'
import {Formulario} from '../components/Formulario'


export async function accion({ request,params }){
    const formdata = await request.formdata()
    const data = Object.fromEntries(formdata)
    const email = formdata.get('email')

    const errores = []

    if(Object.values(data).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push('El email no es válido')
    }

    if(Object.keys(errores).length){
        return errores
    }



    await editarCliente(params.id, data)






    return redirect('/')
}

export async function loader({params}){

    const cliente = await obtenerCliente(params.id)

    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El cliente no fue encontrado'
        })
    };


    return cliente
}

export const EditarCliente = () => {


    const cliente = useLoaderData()
    const navigate = useNavigate()
    const errores = useActionData()


    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-900'>CRM - Clientes</h1>
            <p className="mt-5">Edita el cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate('/')}
                >
                    Volver
                </button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 px-5 py-10 mt-20 m-auto '>

                <Form noValidate method='PUT'>
                    <Formulario cliente={cliente}/>
                    <input
                        type='submit'
                        className='bg-blue-900 text-white px-4 py-2 rounded'
                        value="Actualizar cliente"
                    />
                </Form>
            </div>
        </div>
    )
}
