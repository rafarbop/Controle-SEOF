document.body.onload = () => {
    var header = document.getElementById("header")

    header.innerHTML = `
    <h1 class="title box is-marginless has-background-success-dark has-text-success-light has-text-centered">Controle de Empenhos</h1>
    <nav class="has-background-success-dark" role="navigation" aria-label="main navigation">
        <div class="is-flex is-justify-content-space-evenly">
            <a href="./lista-empenhos.html" class="button is-primary is-inverted is-outlined">Lista de Empenhos</a>
            <a href="/" class="button is-primary is-inverted is-outlined">Consultar Novos empenhos</a>
        </div>
    </nav>`
}