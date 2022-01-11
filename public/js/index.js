

document.getElementById("buttonConsultarEmpenho").onclick = () => {

    var numeroEmpenho = document.getElementById("numberEmpenho").value

    var keyApiGov = document.getElementById("keyApiGov").value

    if (numeroEmpenho.length != 12){
        return alert("O Empenho deve ser informado com o ano e numero: Ex.: 2021NE000001")
        
    }

    var requisicao = new XMLHttpRequest();

    var urlBaseAPI = "http://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos/15895326405"

    var urlEmpenho = urlBaseAPI+numeroEmpenho

    requisicao.open("GET", urlEmpenho);
    requisicao.setRequestHeader("chave-api-dados", keyApiGov);
    requisicao.responseType = 'text';
    requisicao.send();
    console.log("Enviada solicitação e esperando Respota!")

    var dados = document.getElementById("listaDeEmpenhos")
    dados.innerHTML = '<button class="button is-success is-loading is-rounded">Loading</button>'

    requisicao.onload = () => {
        
        dados.innerHTML = ''

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

        const containerEmpenhos = document.getElementById("container-empenhos")
        while (containerEmpenhos.firstChild){
            containerEmpenhos.removeChild(containerEmpenhos.firstChild)
        }

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

            containerEmpenhos.appendChild(item)

        }
        console.log("Resposta Recebida!")
    }
    

}