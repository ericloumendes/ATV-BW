import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class listagemProdutoGenero extends Listagem{
    private produtos: Array<Produto>;
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }


    public listar(): void {
        console.log('')
        console.log('Produtos mais consumidos por gênero')
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero dos produtos: `)
        console.log('')
        let orderedProd = [...this.produtos]

        let objetos: Array<Produto> = []

        orderedProd.sort((a,b) => b.getConsumoProduto - a.getConsumoProduto)

        orderedProd.forEach(prod => {
            if (prod.getGeneroProduto.toLocaleLowerCase() == genero.toLocaleLowerCase()){
                objetos.push(prod)
                console.log(`Nome: ${prod.nome}`);
                console.log(`Valor: R$ ${prod.getValorProduto}`);
                console.log(`Gênero: ${prod.getGeneroProduto}`);
                console.log(`Consumidos: ${prod.getConsumoProduto}`)
                console.log(`--------------------------------------`);
            }
        })

        if (objetos.length === 0){
            console.log('Gênero não encontrado!')
        }

        console.log(`\n`);
    }
}