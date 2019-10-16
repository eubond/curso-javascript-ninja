/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var nina = ['Nina', 3, 'fofa', true, null]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myNina(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myNina(nina[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayComplex(arg, indice) {
  return arg[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var feriados = ['natal', 25, null, 'pascoa', true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayComplex(feriados, 3); //pascoa

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookTitle) {
  var allBooks = {
    "Livro 1": {
      "quantidadePaginas": 1,
      "autor": "Autora 1",
      "editora": "Editora 1"
    },
    "Livro 2": {
      "quantidadePaginas": 2,
      "autor": "Autora 2",
      "editora": "Editora 2"
    },
    "Livro 3": {
      "quantidadePaginas": 3,
      "autor": "Autora 3",
      "editora": "Editora 3"
    }
  }
  if (bookTitle) {
    return allBooks[bookTitle[autor]];
  }
  return allBooks;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro "+ bookTitle + " tem " + allBooks[bookTitle] + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+ bookTitle + " é " + allBooks[bookTitle] + " páginas!")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
