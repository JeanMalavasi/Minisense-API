import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SensorDevice } from 'src/sensorDevice/sensorDevice.model';
import { User } from './user.model';
import { UserValidator } from './userValidator.model';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) { }

    async getAll(): Promise<User[]> {
        return this.userModel.findAll({
            attributes: ['id', 'username', 'email']
        });
    }

    async getOneById(id: number): Promise<User> {
        return await this.userModel.findByPk(id, {
            include: [
                {
                    model: SensorDevice,
                    attributes: ['id', 'key', 'label', 'description', 'userid'],
                },

            ],
            attributes: [
                'id', 'username', 'email', 
            ],
        })
    }

    async getOneByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({
            where: {
                email: email
            },
            include: [
                {
                    model: SensorDevice,
                    attributes: ['id', 'key', 'label', 'description', 'userid'],
                },

            ],
            attributes: [
                'id', 'username', 'email', 
            ],
        })
    }

    async authByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({
            where: {
                email: email
            }
        })
    }

    async create(user: UserValidator) {
        const response = await this.userModel.create(user, {
            fields: ['username', 'email', 'password']
        });

        var { username, email } = response
        var json = {
            "username": username,
            "email": email
        }
        return json
    }

    async update(user: UserValidator): Promise<[number, User[]]> {
        return this.userModel.update(user, {
            where: {
                id: user.id
            },
            fields: ["username", "password"]
        });
         
    }

    async deleteOneById(id: number): Promise<User> {
        const userDeleted: User = await this.userModel.findByPk(id, {
            attributes: ['id' , 'username', 'email']
        })
        if (userDeleted) {
            userDeleted.destroy();
        }
        return userDeleted
    }
}
