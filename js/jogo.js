// Função para inserir um novo Jogo
async function postJogo(Jogo){
    const url = ``
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Jogo)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para listar todos os Jogo da API  ////////////////////////////////////////////////////////////////////////////////////////
export async function getJogo(){
    const url = `http://localhost:8080/v1/controle-jogos/jogo`
    const response = await fetch(url)
    const data = await response.json()
    return data 
}

/////////////////////////////////////////////////// Função para buscar um único Jogo pelo ID  //////////////////////////////////////////////////////////////////////////////////////
export async function getIdJogo(id){
    const url = `http://localhost:8080/v1/controle-jogos/jogo?jogos_like=^${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data 
}

//////////////////////////////////////////////////// Função para atualizar um Jogo existente  //////////////////////////////////////////////////////////////////////////////////////
async function putJogo(id,Jogo){
    const url = ``
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Jogo)
    }
    const response = await fetch(url, options)
    return response.ok
}

////////////////////////////////////////////////// Função para deletar um Jogo específico pelo ID  ///////////////////////////////////////////////////////////////////////////////////
async function deleteJogo(id) {
    const url = ``
    const options ={
       method: 'DELETE'
    }
   const response =  await fetch(url, options)

   return response.ok
}
