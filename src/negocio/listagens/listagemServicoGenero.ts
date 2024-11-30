import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class listagemServicoGenero extends Listagem{
    private servicos: Array<Servico>;
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }


    public listar(): void {
        console.log('')
        console.log('Serviços mais consumidos por gênero')
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero dos serviços: `)
        console.log('')
        let orderedProd = [...this.servicos]

        let objetos: Array<Servico> = []

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