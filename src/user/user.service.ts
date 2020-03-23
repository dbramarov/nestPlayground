import { User } from './user-classes/user.class';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>, private logger: Logger) { }

    async create(createUserDto: User): Promise<User> {
        const createdCat = new this.userModel(createUserDto);
        return createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async deleteUser(id: string): Promise<User> {
        return this.userModel.deleteOne({_id: id}).exec();
    }

    async updateUser(id: string, userDto: User): Promise<User> {
        return this.userModel.findOneAndUpdate({_id: id}, userDto, {new: true});
    }

}
