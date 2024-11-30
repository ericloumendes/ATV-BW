import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public deleteCliente(id: number){
        this.clientes.splice(id, 1);
    }

    public deleteProduto(id: number){
        this.produtos.splice(id, 1);
    }

    public deleteServico(id: number){
        this.servicos.splice(id, 1);
    }
}