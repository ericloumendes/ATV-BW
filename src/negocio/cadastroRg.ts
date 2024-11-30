import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Cadastro from "./cadastro";
import ListagemClientes from "./listagemClientes";

export default class CadastroRg extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de RG`);
        let valor = this.entrada.receberTexto(`Por favor informe o número do RG a ser cadastrado: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let listagem = new ListagemClientes(this.clientes);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do cliente portador deste RG: `);
        let rg = new RG(valor, dataEmissao);
        this.clientes[id].setRgs(rg);
        console.log(`\nCadastro concluído!`)
    }
    
}