/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários.
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.
    
    */
var usuario = {
    nome: 'marcus',
    sobrenome: 'lara',
    idade: 29,
    email: 'marcus.lara@hotmail.com',
    telefone: '15996663288'
};
console.log(usuario);
// --------------------------------------------------------------------------
/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online.
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.

*/
var nomeProduto = 'TV';
var preco = 2500.00;
var disponivel = true;
var produto1 = {
    nome: 'Tv',
    preco: 2500.00,
    estoque: 10,
    categorias: ['Eletrodomestico']
};
console.log(produto1);
