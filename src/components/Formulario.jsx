

export const Formulario = ({cliente}) => {


  return (
    <>
        <div className="mb-4">
            <label className="text-gray-800" htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                className="p-3 mt-3 bg-gray-50 block w-full"
                placeholder="Nombre del cliente"
                defaultValue={cliente?.nombre}
            />
        </div> 
        <div className="mb-4">
            <label className="text-gray-800" htmlFor="empresa">Empresa</label>
            <input 
                type="text"
                id="empresa"
                name="empresa"
                className="p-3 mt-3 bg-gray-50 block w-full"
                placeholder="Empresa del cliente"
                defaultValue={cliente?.empresa}
            />
        </div> 
        <div className="mb-4">
            <label className="text-gray-800" htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                className="p-3 mt-3 bg-gray-50 block w-full"
                placeholder="Email de cliente"
                defaultValue={cliente?.email}
            />
        </div> 
        <div className="mb-4">
            <label className="text-gray-800" htmlFor="telefono">Teléfono</label>
            <input 
                type="tel"
                id="telefono"
                name="telefono"
                className="p-3 mt-3 bg-gray-50 block w-full"
                placeholder="Teléfono de cliente"
                defaultValue={cliente?.telefono}
            />
        </div> 
        <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={cliente?.notas}
                />
            </div>
    </>
  )
}
