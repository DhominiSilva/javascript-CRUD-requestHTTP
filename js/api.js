const api = {
    async buscarPensamentos(){ // async espera a resposta da API sem travar o programa
        // método get para buscar os pensamentos da API, por padrão o fetch usa o método GET, então não é necessário especificar
        try {
            const response = await fetch('http://localhost:3000/pensamentos'); // await espera a resposta da API sem travar o programa
            return await response.json(); // converte a resposta da API para um objeto JS
        }
        catch (error) {
            alert('Não foi possível carregar os pensamentos');
            throw error;
        }
    },

    async salvarPensamento(pensamento){ // async espera a resposta da API sem travar o programa
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST', // método HTTP para enviar dados
                headers: {
                    "Content-Type": "application/json" // tipo de conteúdo para enviar os dados em formato JSON
                },
                body: JSON.stringify(pensamento) // converte o objeto pensamento para uma string JSON para enviar para a API
            });
            return await response.json(); 
        }
        catch (error) {
            alert('Não foi possível carregar os pensamentos');
            throw error;
        }
    }
}

export default api; // exporta o objeto api para ser usado em outros arquivos do projeto