//EX16: Inserir um valor inicial e fazer a emissão de cedulas que serão emitidas no print. (Usando forEach)
const prompt = require('readline-sync');

let balance = parseInt(prompt.question("Digite a quantia de dinheiro:"), 10);
let half;
const notes = [50, 20, 10, 5, 2, 1]

// notes: É o seu array (a lista). Imagine que é uma pasta cheia de papéis, onde cada papel é uma nota.

// .forEach(): É o método. Ele diz ao JavaScript: "Para cada item que você encontrar aqui dentro, execute a função que eu vou te dar agora".

// note: É o parâmetro (ou apelido). Ele representa o item atual do ciclo. Na primeira volta, note é a primeira nota; na segunda volta, é a segunda, e assim por diante.

// =>: É a Arrow Function. Ela indica que o que vem a seguir é o bloco de código que deve ser executado para cada nota.

notes.forEach(note => {
    half = Math.floor(balance / note);
    balance %= note;
    if(half > 0){
        console.log(`${half} Cedulas de ${note}`);
    };
});