import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";
import ListagemClientes from "../listagemClientes";
import listagemServicos from "./listagemServico";

export default class cadastroConsumoServico extends Cadastro{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.servicos = servicos
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Consumo de produto`);
        let listagem = new ListagemClientes(this.clientes);
        listagem.listar();

        let idCliente = this.entrada.receberNumero(`Selecione o id do cliente que está consumindo o produto: `);

        console.clear()
        let listagem1 = new listagemServicos(this.servicos);
        listagem1.listar();

        let idProduto = this.entrada.receberNumero(`Selecione o id do produto que está sendo consumido: `);

        this.clientes[idCliente].setServicosConsumidos(this.servicos[idProduto]);
        this.servicos[idProduto].setConsumoProduto(1);

        console.log(`\nCadastro concluído`);
    }
}