import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class listagemClientesGenero extends Listagem{
    private clientes: Array<Cliente>
    constructor (clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
    }
    public listar(): void {
        console.log('')
        console.log(`Listagem de todos os clientes por gênero`)

        let entrada = new Entrada

        let genero = entrada.receberTexto(`Digite o gênero dos clientes a serem listados no formato m/f: `);

        let i = 0
        this.clientes.forEach(cliente => { if (cliente.sexo === genero){
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Sexo: ` + cliente.sexo)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Telefones:`);
            cliente.getTelefones.forEach(tel => { console.log(` - ${tel.getDdd} ${tel.getNumero}`) })
            console.log(`RGs:`);
            cliente.getRgs.forEach(rg => { console.log(` - ${rg.getValor}`) })
            console.log(`--------------------------------------`);
            i++;
        }
        });
        console.log(`\n`);
    }
}