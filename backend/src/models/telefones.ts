import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cliente } from "./cliente"

@Table({
    tableName: 'Telefones',
    timestamps: false
})

export class Telefones extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    tel_cod!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    tel_numero!: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    tel_ddd!: string;

    @ForeignKey(() => Cliente)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cli_cod!: number;

    @BelongsTo(() => Cliente)
    cliente!: Cliente
}