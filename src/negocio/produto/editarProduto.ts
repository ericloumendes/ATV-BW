import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Editar from "../edicao/editar";
import listagemProdutos from "./listagemProduto";

export default class editarProduto extends Editar{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public editar(): void {
        let listagem = new listagemProdutos(this.produtos);
        listagem.listar();

        let id = this.entrada.receberNumero(`Selecione o id do produto a ser editado: `);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do produto: `);

        this.produtos[id].nome = nome;
        this.produtos[id].setValorProduto(valor);
        this.produtos[id].setGeneroProduto(genero)
    }
    
}