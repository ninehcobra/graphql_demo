import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { UserSettingService } from '../user_setting/user_setting.service';
import { CreateUserInput } from './dto';
import { PubSub } from 'graphql-subscriptions';



const pubSub = new PubSub()

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) { }

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }



  @Mutation((returns) => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    const newUser = await this.userService.createUser(createUserData);
    pubSub.publish('userAdded', { userAdded: newUser });
    return newUser
  }

  @Subscription((returns) => User,
  )
  userAdded() {
    return pubSub.asyncIterator('userAdded')
  }
}
