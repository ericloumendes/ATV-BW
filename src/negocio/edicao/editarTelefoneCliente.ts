import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import ListagemClientes from "../listagemClientes";
import Editar from "./editar";

export default class editarTelefoneCliente extends Editar{
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

        console.log(`Telefones: `);
        this.clientes[id].getTelefones.map((telefones, num = 0) => {
            console.log(` - ${telefones.getDdd} ${telefones.getNumero} - ID: ${num}`)
            num ++;
        });

        console.log(``);

        let telId = this.entrada.receberNumero(`Selecione o id do telefone a ser editado: `);

        console.clear();
        let telefone = this.entrada.receberTexto(`Por favor informe o telefone a ser cadastrado no formato, ddd numero: `);
        let partData = telefone.split(' ');
        let ddd = partData[0];
        let numero = partData[1];
        let tel = new Telefone(ddd, numero);

        this.clientes[id].editTelefone(telId, tel);

        console.log(`Cadastro concluído`)
    }
    
}