import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { UserArg } from './dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => [User], { description: 'Get all users' })
  getUsers() {
    return this.userService.findAll();
  }

  @Query((returns) => User, { description: 'Get a single user by id' })
  geUserById(
    @Args('id', { type: () => Int, description: 'Specific ID of user.' })
    id: number,
  ) {
    return this.userService.findOne(id);
  }
}
