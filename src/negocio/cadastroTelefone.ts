import Cadastro from "./cadastro";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import ListagemClientes from "./listagemClientes";
import Telefone from "../modelo/telefone";

export default class cadastroTelefone extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do telefone`);
        let telefone = this.entrada.receberTexto(`Por favor informe o telefone a ser cadastrado no formato, ddd numero: `);
        let partData = telefone.split(' ');
        let ddd = partData[0];
        let numero = partData[1];
        let listagem = new ListagemClientes(this.clientes);
        listagem.listar();
        let id = this.entrada.receberNumero(`Por favor informe o id do cliente portador deste número de telefone: `);
        let tel = new Telefone(ddd, numero);
        this.clientes[id].setTelefones(tel);
        console.log(`\nCadastro concluído!`)
    }
    
}