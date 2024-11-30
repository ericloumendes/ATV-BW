import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Editar from "../edicao/editar";
import listagemServicos from "./listagemServico";
import listagemProdutos from "./listagemServico";

export default class editarServico extends Editar{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicoss: Array<Servico>) {
        super()
        this.servicos = servicoss
        this.entrada = new Entrada()
    }

    public editar(): void {
        let listagem = new listagemServicos(this.servicos);
        listagem.listar();

        let id = this.entrada.receberNumero(`Selecione o id do serviço a ser editado: `);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do serviço: `);

        this.servicos[id].nome = nome;
        this.servicos[id].setValorProduto(valor);
        this.servicos[id].setGeneroProduto(genero);
    }
    
}