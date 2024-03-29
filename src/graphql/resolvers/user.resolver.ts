import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers } from 'src/__mocks__/user.mock';

@Resolver()
export class UserResolver {
  @Query((returns) => User, { nullable: true, name: 'UserById' })
  getUser(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => User)
  getUsers() {
    return mockUsers;
  }
}
