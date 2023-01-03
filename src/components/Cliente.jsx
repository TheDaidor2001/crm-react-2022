import {useNavigate} from 'react-router-dom'

export const Cliente = ({ cliente }) => {

    const navigate = useNavigate()

    const {nombre, telefono, email, empresa, id} = cliente

    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800 font-bold">{nombre}</p>
                <p className='text-xs'>{empresa}</p>
            </td>
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800"><span className='font-bold uppercase text-xl'>Email: </span>{email}</p>
                <p className='text-lg text-black-500'><span className='font-bold uppercase text-lg'>Teléfono: </span>{telefono}</p>
            </td>
            <td className='flex gap-3 p-6 justify-center'>
                <button 
                    type='button'
                    className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                    onClick={() => navigate(`clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button 
                    type='button'
                    className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
