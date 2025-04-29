// Função para inserir um novo Desenvolvedores
async function postDesenvolvedores(Desenvolvedores){
    const url = ``
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Desenvolvedores)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para listar todos os Desenvolvedores da API  ////////////////////////////////////////////////////////////////////////////////////////
export async function getDesenvolvedores(){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    return data 
}

/////////////////////////////////////////////////// Função para buscar um único Desenvolvedores pelo ID  //////////////////////////////////////////////////////////////////////////////////////
export async function getJoDesenvolvedores(id){
    const url = ``
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data 
}

//////////////////////////////////////////////////// Função para atualizar um Desenvolvedores existente  //////////////////////////////////////////////////////////////////////////////////////
async function putDesenvolvedores(id,Desenvolvedores){
    const url = ``
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Desenvolvedores)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para deletar um Desenvolvedores específico pelo ID  ///////////////////////////////////////////////////////////////////////////////////
async function deleteDesenvolvedores(id) {
    const url = ``
    const options ={
       method: 'DELETE'
    }
   const response =  await fetch(url, options)

   return response.ok
}
