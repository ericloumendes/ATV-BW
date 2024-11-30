import Entrada from "../../io/entrada"
import Empresa from "../../modelo/empresa"
import ListagemClientes from "../listagemClientes"
import Excluir from "./excluir"

export default class ExcluirTelefone extends Excluir{
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
        let id = this.entrada.receberNumero(`Por favor informe o id do cliente auqe possui o telefone ser excluído: `);

        console.log(`Telefones: `);
        this.empresa.getClientes[id].getTelefones.map((telefones, num = 0) => {
            console.log(` - ${telefones.getDdd} ${telefones.getNumero} - ID: ${num}`)
            num ++;
        });

        console.log(``);

        let telId = this.entrada.receberNumero(`Selecione o id do telefone a ser excluído: `);

        this.empresa.getClientes[id].deleteTelefone(telId);

        console.log(`\nTelefone excluído com sucesso!`);
    }
}