import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { Repository } from 'typeorm';
import { UserArg } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async create(user: User): Promise<User> {
    let newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: User): Promise<User> {
    user.id = id;
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
