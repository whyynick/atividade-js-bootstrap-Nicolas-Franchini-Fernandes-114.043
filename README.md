## Nome e tema do projeto
O projeto se chama **PotatoMarket**, uma loja virtual temática especializada na venda de batatas em diferentes tamanhos e pacotes.

## Explicação da interface criada
A interface apresenta um catálogo de produtos simples e direto:
- Uma barra de navegação no topo com o nome da loja (**PotatoMarket**) e uma chamada para o catálogo.
- Um alerta avisando sobre a promoção de batata extra para compras a partir de R$ 50,00.
- Três cards mostrando diferentes opções do produto (pacote mini de 1kg, pacote médio de 5kg e pacote master de 20kg), cada um com preço, etiqueta de destaque e botão de compra.
- Um rodapé finalizando a página com os direitos reservados.

## Componentes Bootstrap utilizados
- `navbar`: barra de navegação no topo da página.
- `container`, `row` e `col`: organização da página em grade e colunas responsivas.
- `alert`: caixa de destaque com o aviso da promoção.
- `card`: cartões para organizar e exibir as opções de batatas.
- `badge`: etiquetas de destaque nos produtos (ex: "Mais vendida").
- `button` (`btn`): botões estilizados para a ação de compra.
- `footer`: rodapé da página.

## Explicação de variáveis
Utilizei **const** para o `nome` porque o nome deve ser o mesmo, já nas variáveis `preco` e `disponivel`, utilizei **let** porque desejo mudá-las no decorrer do código.

## Explicação da substituição do var
O `var` pode declarar e redeclarar várias vezes a mesma variável sem dar erro. O `let` e o `const` não permitem isso, evitando bugs. Além disso, o `const` permite que os valores das variáveis não mudem e fiquem protegidos contra alterações acidentais.

## Tipos de dados utilizados
- `string`: textos entre aspas, como o nome do aluno (`"Nicolas"`) e do produto (`"Batata"`).
- `number`: valores numéricos para cálculos, como o preço (`2.50`) e a quantidade (`20`).
- `boolean`: valores lógicos de verdadeiro ou falso, como a disponibilidade (`true` ou `false`).
- `null`: representa a ausência intencional de um valor, utilizado na descrição (`null`).

## Explicação da condição criada com if/else
Criei uma condição que verifica se o valor total do pedido é maior ou igual a R$ 50,00:
- Se for verdadeiro (`if`): o cliente ganha uma batata extra de brinde e a quantidade é incrementada.
- Se for falso (`else`): o sistema calcula e informa no console quantos reais faltam para o cliente atingir o valor da promoção.

## Maior dificuldade encontrada
Entender como estruturar utilizando o bootstrap

## Como a dificuldade foi resolvida
Por parte consultei o site próprio do Bootstrap e parte consultei por IA