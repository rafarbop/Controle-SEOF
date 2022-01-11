function keyApiGov() {
    const userKey = prompt("Informe a chave de acesso(token) a ser utilizado na API:")
    return userKey
}

// Configuração do Firebase Realtime Database
const keyUserFirebase = prompt("Informe a apiKey para acesso ao Firebase:")
const firebaseConfig = {
    apiKey: keyUserFirebase,
    authDomain: "controle-empenhos.firebaseapp.com",
    databaseURL: "https://controle-empenhos-default-rtdb.firebaseio.com",
    projectId: "controle-empenhos",
    storageBucket: "controle-empenhos.appspot.com",
    messagingSenderId: "539608286640",
    appId: "1:539608286640:web:0beb4fe688b33409ecc275"
}
// Inicializando o Firebase
firebase.initializeApp(firebaseConfig)
// Get a reference to the database service
var database = firebase.database();

var lerEmpenho = database.ref('empenhos/')
lerEmpenho.on('value',(listaEmpenhos) => {

    listaEmpenhos.forEach((empenho) => {

        const empenhoJson = empenho.val()
        console.log(empenhoJson.data)

        const dados = document.getElementById("listaDeEmpenhos")

        let groupColumns = document.createElement("div")
        groupColumns.classList.add("columns","is-fullwidth","is-vcentered","has-text-centered","has-background-success","has-text-dark")

        //Criando as colunas de cada empenho
        let colValor = document.createElement("div")
        colValor.classList.add("column","is-1")
        let colObs = document.createElement("div")
        colObs.classList.add("column","is-4","has-text-justified")
        let colNomeFav = document.createElement("div")
        colNomeFav.classList.add("column")
        let colCodigoFav = document.createElement("div")
        colCodigoFav.classList.add("column")
        let colProcesso = document.createElement("div")
        colProcesso.classList.add("column")
        let colNumeroEmpenho = document.createElement("div")
        colNumeroEmpenho.classList.add("column")
        let colData = document.createElement("div")
        colData.classList.add("column","is-1")


        colValor.innerText = empenhoJson.valor
        colObs.innerText = empenhoJson.observacao
        colNomeFav.innerText = empenhoJson.nomeFavorecido
        colCodigoFav.innerText = empenhoJson.codigoFavorecido
        colProcesso.innerText = empenhoJson.numeroProcesso
        colNumeroEmpenho.innerText = empenhoJson.documentoResumido
        colData.innerText = empenhoJson.data
        
        groupColumns.appendChild(colData)
        groupColumns.appendChild(colNumeroEmpenho)
        groupColumns.appendChild(colProcesso)
        groupColumns.appendChild(colCodigoFav)
        groupColumns.appendChild(colNomeFav)
        groupColumns.appendChild(colObs)
        groupColumns.appendChild(colValor)

        dados.appendChild(groupColumns)

        // for (key in empenhoJson) {
        //     let item = document.createElement("div");
        //     item.classList.add("columns", "has-text-centered", "has-background-success-dark", "has-text-white")

        //     let itemKey = document.createElement("div");
        //     itemKey.classList.add("column", "is-one-quarter")
        //     itemKey.innerText = key;
        //     item.appendChild(itemKey)

        //     let itemInfo = document.createElement("div");
        //     itemInfo.classList.add("column", "has-text-centered")
        //     itemInfo.innerText = empenhoJson[key]
        //     item.appendChild(itemInfo)
            
        //     document.getElementById("container-empenhos").insertBefore(item, dados)
            

        // }
    })

    
})

