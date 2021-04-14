

function keyAPI() {
    const userKey = prompt("Informe a chave de acesso(token)  a ser utilizado na API:")
    return userKey
}

document.getElementById("buttonConsultarEmpenho").onclick = () => {

    var numeroEmpenho = document.getElementById("numberEmpenho").value

    if (numeroEmpenho.length != 12){
        return alert("O Empenho deve ser informado com o ano e numero: Ex.: 2021NE000001")
        
    }

    var requisicao = new XMLHttpRequest();

    var urlBaseAPI = "http://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos/15895326405"

    var urlEmpenho = urlBaseAPI+numeroEmpenho

    var keyUserAPI = keyAPI()

    requisicao.open("GET", urlEmpenho);
    requisicao.setRequestHeader("chave-api-dados", keyUserAPI);
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
            itemKey.classList.add("column","is-one-quarter")
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