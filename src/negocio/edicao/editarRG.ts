import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import ListagemClientes from "../listagemClientes";
import Editar from "./editar";

export default class editarRg extends Editar{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public editar(): void {
        let listagem = new ListagemClientes(this.clientes);
        listagem.listar();

        let id = this.entrada.receberNumero(`Selecione o id do cliente a ser editado: `);
        console.log(``);

        console.log(`RGs: `);
        this.clientes[id].getRgs.map((rg, num = 0) => {
            console.log(` - ${rg.getValor} - ID: ${num}`)
            num ++;
        });

        console.log(``);

        let rgId = this.entrada.receberNumero(`Selecione o id do RG a ser editado: `);

        console.clear();
        let valor = this.entrada.receberTexto(`Por favor informe o número do RG a ser cadastrado: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao);

        this.clientes[id].editRg(rgId, rg);

        console.log(`Cadastro concluído`)
    }
}