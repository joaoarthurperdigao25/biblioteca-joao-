const livros  = []

const adicionarLivro = (livros, livro) => {
    livros.push(livro);
    return livros;
}

const listar = id => {

}

const pesquisarLivros = (livros, termo) => {
    return livros.find(livro => livro.titulo.toLowerCase().includes(termo.toLowerCase()));
}

const filtrar = genero => {

}

const marcarComoLido = id => {

}   

const remover = id => {

}

const estatisticas = () => {

}

module.exports = {adicionarLivro, pesquisar}
