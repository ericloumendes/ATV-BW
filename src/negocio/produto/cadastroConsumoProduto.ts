import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";
import ListagemClientes from "../listagemClientes";
import listagemProdutos from "./listagemProduto";

export default class cadastroConsumoProduto extends Cadastro{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.produtos = produtos
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Consumo de produto`);
        let listagem = new ListagemClientes(this.clientes);
        listagem.listar();

        let idCliente = this.entrada.receberNumero(`Selecione o id do cliente que está consumindo o produto: `);

        console.clear()
        let listagem1 = new listagemProdutos(this.produtos);
        listagem1.listar();

        let idProduto = this.entrada.receberNumero(`Selecione o id do produto que está sendo consumido: `);

        this.clientes[idCliente].setProdutosConsumidos(this.produtos[idProduto]);
        this.produtos[idProduto].setConsumoProduto(1);

        console.log(`\nCadastro concluído`);
    }
}