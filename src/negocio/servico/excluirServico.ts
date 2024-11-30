import Entrada from "../../io/entrada"
import Empresa from "../../modelo/empresa"
import Excluir from "../exclusão/excluir"
import listagemServicos from "./listagemServico"

export default class excluirServico extends Excluir{
    private empresa: Empresa
    private entrada: Entrada
    constructor(servicos: Empresa) {
        super()
        this.empresa = servicos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão de produtos`);
        let listagem = new listagemServicos(this.empresa.getServicos);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do servico a ser excluído: `);
        this.empresa.deleteServico(id);
        console.log(`\nServiço excluído com sucesso!`);
    }

}