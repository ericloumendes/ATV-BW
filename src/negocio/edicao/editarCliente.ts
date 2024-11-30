import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import ListagemClientes from "../listagemClientes"
import Editar from "./editar"

export default class editarCliente extends Editar{
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

        let id = this.entrada.receberNumero(`Selecione o id do cliente a ser editado: `)

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let sexo = this.entrada.receberTexto(`Por favor informe o sexo do cliente no padrão m/f: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new CPF(valor, dataEmissao);

        this.clientes[id].nome = nome;
        this.clientes[id].nomeSocial = nomeSocial;
        this.clientes[id].sexo = sexo;
        this.clientes[id].setCpf(cpf);
    }
    
}