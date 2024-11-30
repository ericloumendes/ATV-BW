import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import ListagemClientes from "../listagemClientes";
import Excluir from "./excluir";

export default class ExcluirCliente extends Excluir{
    private empresa: Empresa
    private entrada: Entrada
    constructor(clientes: Empresa) {
        super()
        this.empresa = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nInício da exclusão de clientes`);
        let listagem = new ListagemClientes(this.empresa.getClientes);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do cliente a ser excluído: `);
        this.empresa.deleteCliente(id)
        console.log(`\nCliente excluído com sucesso!`);
    }
    
}