import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class listagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        let i = 0
        this.servicos.forEach(prod => {
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