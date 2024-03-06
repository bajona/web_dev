function maior(...valores:number[]):number{
    let maior = -1;
    let i:number;
    for(let i = 0; i <=valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i];
        }
    }
    return maior;
}

console.log('Exercicio 1: O maior numero dado como input eh', maior(1,74,7,23,42,8));


function ehpar(valor:number):boolean{
    if(valor%2==0){
        return true;
    }else{
        return false;
    }
}

console.log('Exercicio 2: O numero entrado como input eh', ehpar(9));

function calcularmedia(...valores:number[]):number{
    let i:number;
    let media = 0;
    for(i = 0; i<=5; i++){
        media += valores[i];
    }
    return media/i;
}


console.log('Exercicio 3: A media dos numeros informados eh', calcularmedia(18,42,63,74,25,16));

function caixalta(palavra:string):string{
    return palavra.toUpperCase();
}

console.log('Exercicio 4: O texto em caixa alta fica dessa maneira:', caixalta('alfabeto'));

function ehprimo(numero:number):boolean{
    let criteriofinal = 0;
    for(let i=2; i<numero; i++){
        if(numero % i ==0)
            criteriofinal++;
    }
    if(criteriofinal==0)
        return true;
     else
        return false;
}

console.log('Exercicio 5: O numero informado pode ser dado como: false > nao primo e true > primo', ehprimo(920));

function invert(...numeros:number[]):number[]{
    return numeros.reverse();
}


console.log('Exercicio 6: Os numeros 1,2,3,4,5,6 de forma invertida ficam da seguinte maneira', invert(1,2,3,4,5,6));

function porcentagem(valor1:number, valor2:number):number{
    let valorfinal:number;
    let valorporcento = valor1*(valor2/100);

    valorfinal = valor1 + valorporcento;
    return valorfinal;
}

console.log("Exericio 7: O numero 100 incrementado em 10% eh", porcentagem(100, 10));

function inverterpalavra(palavras:string):string{
    return palavras.split('').reverse().join('');
}

console.log('Exericio 8: "ola meu nome eh paulo" invertido fica da seguinte maneira:', inverterpalavra('ola meu nome eh paulo'));

function somapar(...numeros:number[]):number{
    let soma = 0, casos = 0;
    for(let i=0; i<numeros.length; i++){
      if(numeros[i] % 2 == 0){
        soma += numeros[i];
        casos++;
      }
    }
    if (casos > 0) {
      let resultado = Math.floor(soma/casos);
      return resultado;
    } else {
      return 0;
    }
  }
  
console.log('Exercicio 9: A soma de todos numeros pares de 1 a 9 eh', somapar(1,2,3,4,5,6,7,8,9));

  function fatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorial(numero - 1);
    }
  }
  
console.log('Exercicio 10: o fatorial do numero 5 eh', fatorial(5)); // Retorna 120