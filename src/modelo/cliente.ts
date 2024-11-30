import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public sexo: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, sexo: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.sexo = sexo
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getConsumoValor(): number {
        let valor = 0
        this.produtosConsumidos.forEach(item =>{
            valor += item.getValorProduto;
        })
        this.servicosConsumidos.forEach(item =>{
            valor += item.getValorProduto;
        })
        return valor
    }

    public setTelefones(tel: Telefone) {
        this.telefones.push(tel)
    }

    public editTelefone(id: number, tel: Telefone){
        this.telefones[id] = tel
    }

    public editRg(id: number, rg: RG){
        this.rgs[id] = rg
    }

    public setRgs(rg: RG) {
        this.rgs.push(rg)
    }

    public setCpf(cpf: CPF){
        this.cpf = cpf
    }

    public deleteTelefone(id: number) {
        this.telefones.splice(id, 1);
    }

    public deleteRG(id: number){
        this.rgs.splice(id, 1);
    }

    public setProdutosConsumidos(valor: Produto){
        this.produtosConsumidos.push(valor);
    }

    public setServicosConsumidos(valor: Servico){
        this.servicosConsumidos.push(valor);
    }
}