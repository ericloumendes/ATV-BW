import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import ListagemClientes from "../listagemClientes";
import Excluir from "./excluir";

export default class ExcluirRG extends Excluir{
    private empresa: Empresa
    private entrada: Entrada
    constructor(clientes: Empresa) {
        super()
        this.empresa = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nInício da exclusão de RG`);
        let listagem = new ListagemClientes(this.empresa.getClientes);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do cliente que possui o RG a ser excluído: `);

        console.log(`RGs: `);
        this.empresa.getClientes[id].getRgs.map((rg, num = 0) => {
            console.log(` - ${rg.getValor} - ID: ${num}`)
            num ++;
        });

        console.log(``);

        let telId = this.entrada.receberNumero(`Selecione o id do RG a ser excluído: `);

        this.empresa.getClientes[id].deleteRG(telId);

        console.log(`\nRG excluído com sucesso!`);
    }
}