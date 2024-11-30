import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Telefones } from "./telefones";
import { Rgs } from "./rgs";
import { Servico } from "./servico";
import { ServicoConsumo } from "./servico-consumo";
import { Produto } from "./produto";
import { ProdutoConsumo } from "./produto-consumo";

@Table({
    tableName: 'Cliente',
    timestamps: false
})

export class Cliente extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    cli_cod!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    cli_nome!: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    cli_nomeSocial!: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    cli_sexo!: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    cli_cpf!: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    cli_cpfEmissao!: string;

    @HasMany(() => Telefones) 
    telefones!: Telefones[];

    @HasMany(() => Rgs)
    rgs!: Rgs[];

    // @BelongsToMany(() => Servico, () => ServicoConsumo)
    // servicos!: Servico[]

    // @BelongsToMany(() => Produto, () => ProdutoConsumo)
    // produtos!: Produto[]
}