

function keyAPI() {
    const userKey = prompt("Informe a chave de acesso(token)  a ser utilizado na API:")
    return userKey
}

document.getElementById("buttonConsultarEmpenho").onclick = () => {


    var requisicao = new XMLHttpRequest();
    requisicao.open("GET", "http://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos/158953264052021NE000001");
    requisicao.setRequestHeader("chave-api-dados", "ccfd07c04592c20a8fae03fff22c5e07");
    requisicao.responseType = 'text';
    requisicao.send();
    console.log("Enviada solicitação e esperando Respota!")
    
    requisicao.onload = () => {
        alert("Resposta Recebida")
        var jsonResponse = JSON.parse(requisicao.response)
        console.log(jsonResponse)

        var empenhoJson = {}

        empenhoJson.data = jsonResponse.data
        empenhoJson.documentoResumido = jsonResponse.documentoResumido
        empenhoJson.numeroProcesso = jsonResponse.numeroProcesso
        empenhoJson.codigoFavorecido = jsonResponse.codigoFavorecido
        empenhoJson.nomeFavorecido = jsonResponse.nomeFavorecido
        empenhoJson.valor = jsonResponse.valor
        empenhoJson.observacao = jsonResponse.observacao

        var dados = document.getElementById("div")

        for (key in empenhoJson) {
            let item = document.createElement("div");
            item.classList.add("columns","has-text-centered","has-background-success-dark","has-text-white")

            let itemKey = document.createElement("div");
            itemKey.classList.add("column","is-one-quarter","is-uppercase")
            itemKey.innerText = key;
            item.appendChild(itemKey)

            let itemInfo = document.createElement("div");
            itemInfo.classList.add("column","has-text-centered")
            itemInfo.innerText = empenhoJson[key]
            item.appendChild(itemInfo)

            document.getElementById("container-empenhos").insertBefore(item, dados)

        }
        console.log("Resposta Recebida!")
    }
    

}