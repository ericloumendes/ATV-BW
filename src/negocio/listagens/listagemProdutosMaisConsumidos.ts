import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class listagemGeralConsumoProduto extends Listagem{
    private servicos: Array<Produto>;
    constructor(servicos: Array<Produto>){
        super();
        this.servicos = servicos;
    }

    public listar(): void {
        console.log('')
        console.log('Produtos mais consumidos geral')
        let orderedServ = [...this.servicos]

        orderedServ.sort((a,b) => b.getConsumoProduto - a.getConsumoProduto)

        orderedServ.forEach(serv => {
            console.log(`Nome: ${serv.nome}`);
            console.log(`Valor: R$ ${serv.getValorProduto}`);
            console.log(`Gênero: ${serv.getGeneroProduto}`);
            console.log(`Consumidos: ${serv.getConsumoProduto}`);
            console.log(`--------------------------------------`);
        })

        console.log('\n')
    }
}