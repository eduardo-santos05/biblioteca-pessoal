import PromptSync from "prompt-sync"
const prompt = PromptSync()

let colecao = []

let livro = {
    numero: 0,
    titulo: '',
    autor: '',
    genero: '',
    status: 'quero ler'
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
            for (let i = 0; i <= colecao.length; i++) {
                livro.numero = i+1
            }
            colecao.push(livro)
            console.log('Livro cadastrado com sucesso!')
            break
        case '2':
            if (colecao.length === 0) {
                console.log('Nenhum livro cadastrado.')
            } else {
                for (let i = 0; i < colecao.length; i++) {
                    console.log(`${i+1}. [${livro.status}] ${livro.titulo} - ${livro.genero} - ${livro.autor}`)
                }  
            }  
            break
        case '3':
            let novoStatus = ''
            let livroEncontrado = false
            let numLivroBuscado = Number(prompt('Informe o número do livro: '))
            
            for (let i = 0; i < colecao.length; i++) {
                if (colecao[i].numero === numLivroBuscado) {
                    livroEncontrado = true
                    novoStatus = prompt('Novo status (quero ler/lendo/lido): ')
                    if (novoStatus === 'quero ler' || novoStatus === 'lendo' || novoStatus === 'lido') {
                        livro.status = novoStatus
                        console.log('Status atualizado com sucesso!')
                    } else {
                        console.log('Status inválido. Use "quero ler", "lendo" ou "lido".')
                    }
                }
            }
            if (!livroEncontrado) {
                console.log('Livro não encontrado.')
            }
            break
    }

} while(opcao !== '0')