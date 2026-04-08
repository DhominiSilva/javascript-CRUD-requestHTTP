const api = {
    async buscarPensamentos(){ // async espera a resposta da API sem travar o programa
        try {
            const response = await fetch('http://localhost:3000/pensamentos'); // await espera a resposta da API sem travar o programa
            return await response.json(); // converte a resposta da API para um objeto JS
            
        }
        catch (error) {
            alert('Não foi possível carregar os pensamentos');
            throw error;
        }
    }
}

export default api; // exporta o objeto api para ser usado em outros arquivos do projeto