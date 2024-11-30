import Entrada from "../../io/entrada"
import Empresa from "../../modelo/empresa"
import Excluir from "../exclusão/excluir"
import listagemProdutos from "./listagemProduto"

export default class excluirProduto extends Excluir{
    private empresa: Empresa
    private entrada: Entrada
    constructor(produtos: Empresa) {
        super()
        this.empresa = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de produtos`);
        let listagem = new listagemProdutos(this.empresa.getProdutos);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do produto a ser excluído: `);
        this.empresa.deleteProduto(id);
        console.log(`\nProduto excluído com sucesso!`);
    }

}