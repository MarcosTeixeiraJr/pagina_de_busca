function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = '<p class="descricao-meta">Você precisa digitar um nome válido</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = ""; 

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase(); // Corrigir nome para consistência

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>`;
        }
    }

    if (!resultados) {
        resultados = '<p class="descricao-meta">Nada foi encontrado</p>';
    }
    section.innerHTML = resultados;
}
