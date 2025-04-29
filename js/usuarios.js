// Função para inserir um novo usuario
async function postUsuario(Usuario){
    const url = ``
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Usuario)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para listar todos os usuarios da API  ////////////////////////////////////////////////////////////////////////////////////////
export async function getUsuarios(){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    return data 
}

/////////////////////////////////////////////////// Função para buscar um único user pelo ID  //////////////////////////////////////////////////////////////////////////////////////
export async function getUsuario(id){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data 
}

//////////////////////////////////////////////////// Função para atualizar um user existente  //////////////////////////////////////////////////////////////////////////////////////
async function putUsuario(id,Usuario){
    const url = ``
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Usuario)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para deletar um user específico pelo ID  ///////////////////////////////////////////////////////////////////////////////////
async function deleteUsuario(id) {
    const url = ``
    const options ={
       method: 'DELETE'
    }
   const response =  await fetch(url, options)

   return response.ok
}

/////////////////////////////////////////////////////////// função para atualizar user ////////////////////////////////////////////////////////////////////////////////////////////////
async function postAtualizar(adicinarTaualizacao) {
    
}
