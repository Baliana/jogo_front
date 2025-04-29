// Função para inserir um novo Genero
async function postGenero(Genero){
    const url = ``
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Genero)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para listar todos os Genero da API  ////////////////////////////////////////////////////////////////////////////////////////
export async function getGenero(){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    return data 
}

/////////////////////////////////////////////////// Função para buscar um único Genero pelo ID  //////////////////////////////////////////////////////////////////////////////////////
export async function getGenero(id){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data 
}

//////////////////////////////////////////////////// Função para atualizar um Genero existente  //////////////////////////////////////////////////////////////////////////////////////
async function putGenero(id,Genero){
    const url = ``
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Genero)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para deletar um Genero específico pelo ID  ///////////////////////////////////////////////////////////////////////////////////
async function deleteGenero(id) {
    const url = ``
    const options ={
       method: 'DELETE'
    }
   const response =  await fetch(url, options)

   return response.ok
}
