import {
  Args,
  Int,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers } from 'src/__mocks__/user.mock';
import { UserSetting } from '../models/user_setting.model';
import { MockUserSetting } from 'src/__mocks__/user_setting.mock';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true, name: 'UserById' })
  getUser(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return MockUserSetting.find((setting) => setting.userId === user.id);
  }
}
