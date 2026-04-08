import api from './api.js'; // importa o objeto api do arquivo api.js para usar suas funções

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos');

        try {
            const pensamentos = await api.buscarPensamentos(); // chama a função buscarPensamentos do objeto api e espera a resposta
            pensamentos.forEach(pensamento => {
                listaPensamentos.innerHTML += `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt=" Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>
                `
            })
        }
        catch (error) {
            alert('Erro ao renderizar pensamentos');
            throw error;
        }
    }
}
export default ui; // exporta o objeto ui para ser usado em outros arquivos do projeto