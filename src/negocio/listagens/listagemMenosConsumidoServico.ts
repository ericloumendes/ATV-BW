import { ClientRequest } from "http";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class listagemMenosConsumoServico extends Listagem{
    private clientes: Array<Cliente>
    constructor (clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
    }
    public listar(): void {
        let orderedCli = [...this.clientes]

        orderedCli.sort((a,b) => a.getServicosConsumidos.length - b.getServicosConsumidos.length)
        console.log(' ')
        console.log(`10 Clientes que menos consumiram serviços em quantidade`)
        let i = 0
        orderedCli.forEach(cliente => { if (i < 10){
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Sexo: ` + cliente.sexo)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Telefones:`);
            cliente.getTelefones.forEach(tel => { console.log(` - ${tel.getDdd} ${tel.getNumero}`) })
            console.log(`RGs:`);
            cliente.getRgs.forEach(rg => { console.log(` - ${rg.getValor}`) })
            console.log(`Serviços consumidos: ${cliente.getServicosConsumidos.length}`)
            console.log(`--------------------------------------`);
            i++;
        }
        });
        console.log(`\n`);
    }
}