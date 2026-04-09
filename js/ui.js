import api from './api.js'; // importa o objeto api do arquivo api.js para usar suas funções

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos');

        try {
            const pensamentos = await api.buscarPensamentos(); // chama a função buscarPensamentos do objeto api e espera a resposta
            pensamentos.forEach(ui.addPensamentoNaLista); // para cada pensamento retornado pela API, chama a função addPensamentoNaLista do objeto ui para adicionar o pensamento na lista de pensamentos na página
        }
        catch (error) {
            alert('Erro ao renderizar pensamentos');
            throw error;
        }
    },

    addPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById('lista-pensamentos');
        const li = document.createElement('li');
        li.setAttribute("data-id", pensamento.id);
        li.classList.add('li-pensamento');

        const iconeAspas = document.createElement('img'); // cria um elemento de imagem para o ícone de aspas
        iconeAspas.src = 'assets/imagens/aspas-azuis.png'; // define o caminho da imagem para o ícone de aspas
        iconeAspas.alt = 'Aspas azuis'; // define o texto alternativo para a imagem do ícone de aspas
        iconeAspas.classList.add('icone-aspas'); // adiciona a classe CSS 'icone-aspas' para estilizar a imagem do ícone de aspas

        const pensamentoConteudo = document.createElement('div');
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add('pensamento-conteudo');

        const pensamentoAutoria = document.createElement('div');
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add('pensamento-autoria');

        li.appendChild(iconeAspas); // adiciona o elemento de imagem do ícone de aspas como filho do elemento de lista
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        listaPensamentos.appendChild(li); // adiciona o elemento de lista como filho do elemento de lista de pensamentos
    }


}
export default ui; // exporta o objeto ui para ser usado em outros arquivos do projeto