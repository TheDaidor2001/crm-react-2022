

export async function getClientes() {
    const respuesta = await fetch(' http://localhost:3000/clientes')
    const resultado = respuesta.json()

    return resultado;
}


export async function añadirCliente(datos) {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        })
        await respuesta.json()

    } catch (error) {
        console.log(error);
    }
}


export async function obtenerCliente(id) {
    const respuesta = await fetch(`http://localhost:3000/clientes/${id}`)
    const resultado = await respuesta.json()

    return resultado
}

export async function editarCliente(id, datos) {
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        })

        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}