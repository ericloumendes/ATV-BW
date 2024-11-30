import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cliente } from "./cliente"

@Table({
    tableName: 'Rgs',
    timestamps: false
})

export class Rgs extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    rg_cod!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    rg_valor!: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    rg_dataEmissao!: string;

    @ForeignKey(() => Cliente)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cli_cod!: number;

    @BelongsTo(() => Cliente)
    cliente!: Cliente
}