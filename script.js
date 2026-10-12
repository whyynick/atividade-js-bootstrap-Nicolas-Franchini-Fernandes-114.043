// Script inicial do projeto
console.log("Meu primeiro script foi executado!");
console.log(20 * 3 + 7);
console.log("Projeto iniciado.");

const id = 1;
const nome = "Nicolas";
let estudando = true;

console.log(`ID: ${id} | Nome: ${nome} | Estudando: ${estudando}`);

estudando = false;
console.log(`Status de estudo alterado para ${estudando}`)

var exemploAntigo = "Var era usado antes do let e const serem criados";
console.log(exemploAntigo);

const idPedido = 1;
const nomeProduto = "Batata";
let preco = 2.50;
let quantidade = 20;
let disponivel = true;
const descricao = null;


console.log(`ID: ${idPedido} | Nome: ${nomeProduto} | Disponível: ${disponivel} | Descrição: ${descricao}`);

const totalPedido = (preco * quantidade);
const faltantepromo = (50 - totalPedido);

let precoParcelado = (totalPedido / 2);

if (totalPedido >= 50) {
    quantidade += 1
    console.log("Você gastou mais de 50 reais e ganhou mais uma batata!");
} else {
    console.log(`Faltam ${faltantepromo} reais para ganhar uma batata extra!`);
}

console.log(`Se deseja parcelar em 2X sem juros, as parecelas ficarão de ${precoParcelado} reais.`)
