import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { DataStream } from "src/dataStream/dataStream.model"
import { User } from "src/user/user.model"

@Table
export class SensorDevice extends Model<SensorDevice>{
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    key: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        unique: 'compose'

    })
    label: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    description: string

    @ForeignKey(() => User)
    @Column({
        allowNull: false,
        onDelete: 'CASCADE',
        unique: 'compose'
    })
    userId: number
    
    @BelongsTo(() => User)
    user: User

    @HasMany(() => DataStream)
    dataStreamId: DataStream
}