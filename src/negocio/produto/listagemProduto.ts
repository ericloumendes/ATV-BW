import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class listagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        let i = 0
        this.produtos.forEach(prod => {
            console.log(`Id: ${i}`);
            console.log(`Nome: ${prod.nome}`)
            console.log(`Valor: R$ ${prod.getValorProduto}`)
            console.log(`Gênero: ${prod.getGeneroProduto}`)
            console.log(`Consumidos: ${prod.getConsumoProduto}`)
            i++;
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }
    
}