import ui from "./ui.js"; // importa o objeto ui do arquivo ui.js para usar suas funções
import api from "./api.js"; // importa o objeto api do arquivo api.js para usar suas funções

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos(); // chama a função renderizarPensamentos do objeto ui para exibir os pensamentos na página

    const formPensamento = document.getElementById('pensamento-form');
    formPensamento.addEventListener('submit', manipularSubmissaoFormulario); // adiciona um ouvinte de evento para o envio do formulário de pensamento, chamando a função manipularSubmissaoFormulario quando o formulário for enviado
});

async function manipularSubmissaoFormulario(event) {
    event.preventDefault(); // impede o comportamento padrão de envio do formulário, que recarregaria a página

    const id = document.getElementById('pensamento-id').value; // obtém o valor do campo de entrada de ID do pensamento
    const conteudo = document.getElementById('pensamento-conteudo').value; // obtém o valor do campo de entrada de conteúdo do pensamento
    const autoria = document.getElementById('pensamento-autoria').value; // obtém o valor do campo de entrada de autoria do pensamento

    try {
        await api.salvarPensamento({ conteudo, autoria }); // chama a função salvarPensamento do objeto api para enviar os dados do novo pensamento para a API e espera a resposta
        ui.renderizarPensamentos(); // chama a função renderizarPensamentos do objeto ui para atualizar a lista de pensamentos na página com o novo pensamento adicionado
    }
    catch (error) {
        alert('Erro ao salvar pensamento');
        throw error;
    }
}