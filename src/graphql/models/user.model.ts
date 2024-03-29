import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './user_setting.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
