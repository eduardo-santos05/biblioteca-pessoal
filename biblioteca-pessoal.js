import PromptSync from "prompt-sync"
const prompt = PromptSync()

let colecao = []



function cadastrarLivro() {
    let livro = {
        numero: colecao.length+1,
        titulo: prompt('Informe o título do livro: '),
        autor: prompt('Informe o autor do livro: '),
        genero: prompt('Informe o gênero do livro: '),
        status: 'quero ler'
    }
    colecao.push(livro)
    console.log('Livro cadastrado com sucesso!')
}

function listarLivros() {
    if (colecao.length === 0) {
        console.log('Nenhum livro cadastrado.')
    } else {
        for (let i = 0; i < colecao.length; i++) {
            console.log(`${colecao[i].numero}. [${colecao[i].status}] ${colecao[i].titulo} - ${colecao[i].genero} - ${colecao[i].autor}`)
        }  
    }  
}

function atualizarStatusLeitura() {
    let novoStatus = ''
    let livroEncontrado = false
    let numLivroBuscado = Number(prompt('Informe o número do livro: '))
    
    for (let i = 0; i < colecao.length; i++) {
        if (colecao[i].numero === numLivroBuscado) {
            livroEncontrado = true
            novoStatus = prompt('Novo status (quero ler/lendo/lido): ')
            if (novoStatus === 'quero ler' || novoStatus === 'lendo' || novoStatus === 'lido') {
                colecao[i].status = novoStatus
                console.log('Status atualizado com sucesso!')
            } else {
                console.log('Status inválido. Use "quero ler", "lendo" ou "lido".')
            }
        }
    }
    if (!livroEncontrado) {
        console.log('Livro não encontrado.')
    }
}

function removerLivro() {
    let encontrado = false
    let numLivro = Number(prompt('Informe o número do livro: '))
    for (let i = 0; i < colecao.length; i++) {
        if (colecao[i].numero == numLivro) {
            encontrado = true
            colecao.splice(i, 1)
            console.log('Livro removido com sucesso!')
        }
    }
    if (!encontrado) {
        console.log('Livro não encontrado.')
    }
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
            cadastrarLivro()
            break
        case '2':
            listarLivros()
            break
        case '3':
            atualizarStatusLeitura()
            break
        case '4':
            removerLivro()
            break 
        case '0':
            console.log('Saindo do sistema. Até logo!') 
            break
        default:
            console.log("Opção inválida! Digite '1', '2', '3', '4' ou '0'.") 
            break 
    }
    
} while(opcao !== '0')