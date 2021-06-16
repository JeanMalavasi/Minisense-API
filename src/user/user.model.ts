import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { SensorDevice } from "src/sensorDevice/sensorDevice.model";

@Table
export class User extends Model<User>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    username: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    password: string

    @HasMany(() => SensorDevice)
    sensorDviceId: SensorDevice[]
}