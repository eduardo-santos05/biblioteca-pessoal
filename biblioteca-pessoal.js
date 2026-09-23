import PromptSync from "prompt-sync"
const prompt = PromptSync()

let opcao = ''
do {
    console.log('\n=== Biblioteca Pessoal ===')
    console.log('1. Cadastrar livro')
    console.log('2. Listar livros')
    console.log('3. Atualizar status de leitura')
    console.log('4. Remover livro')
    console.log('0. Sair')
    
    opcao = prompt('Escolha uma opção: ')

} while(opcao !== '0')