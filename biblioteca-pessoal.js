import PromptSync from "prompt-sync"
const prompt = PromptSync()

let colecao = []

let livro = {
    titulo: '',
    autor: '',
    genero: ''
}

let opcao = ''

do {
    console.log('\n=== Biblioteca Pessoal ===')
    console.log('1. Cadastrar livro')
    console.log('2. Listar livros')
    console.log('3. Atualizar status de leitura')
    console.log('4. Remover livro')
    console.log('0. Sair')
    
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            livro.titulo = prompt('Informe o título do livro: ')
            livro.autor = prompt('Informe o autor do livro: ')
            livro.genero = prompt('Informe o gênero do livro: ')
            colecao.push(livro)
            console.log('Livro cadastrado com sucesso!')
        case '2':
            if (colecao.length === 0) {
                console.log('Nenhum livro cadastrado.')
            } else {
                let status = 'quero ler'
                for (let i = 0; i < colecao.length; i++) {
                    console.log(`${i+1}. [${status}] ${livro.titulo} - ${livro.genero} - ${livro.autor}`)
                }  
            }  
    }

} while(opcao !== '0')