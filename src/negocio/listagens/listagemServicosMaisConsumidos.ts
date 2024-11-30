import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class listagemGeralConsumoServico extends Listagem{
    private servicos: Array<Servico>;
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
    }

    public listar(): void {
        console.log('')
        console.log('Serviços mais consumidos geral')
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