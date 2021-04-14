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

        const dados = document.getElementById("listaDeEmpenhos")
        for (key in empenhoJson) {
            let item = document.createElement("div");
            item.classList.add("columns", "has-text-centered", "has-background-success-dark", "has-text-white")

            let itemKey = document.createElement("div");
            itemKey.classList.add("column", "is-one-quarter")
            itemKey.innerText = key;
            item.appendChild(itemKey)

            let itemInfo = document.createElement("div");
            itemInfo.classList.add("column", "has-text-centered")
            itemInfo.innerText = empenhoJson[key]
            item.appendChild(itemInfo)
            
            document.getElementById("container-empenhos").insertBefore(item, dados)
            

        }
    })

    
})

