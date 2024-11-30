import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cliente } from "./cliente"
import { ServicoConsumo } from "./servico-consumo";

@Table({
    tableName: 'Servico',
    timestamps: false
})

export class Servico extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    serv_cod!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    serv_nome!: string;

    @Column({
        type: DataType.DECIMAL(8,2),
        allowNull: false
    })
    serv_valor!: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    serv_genero!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    serv_dataCriacao!: string;

    // @BelongsToMany(() => Cliente, () => ServicoConsumo)
    // clientes!: Cliente[]
}