function findTheBook(bookArray, bookName){
    // gives me the first occurrence counting from position 1
    const bookPosition = bookArray.indexOf(bookName) + 1;

    console.log(`The book is in position ${bookPosition}`);
};

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

findTheBook(livros, nomeDoLivro)