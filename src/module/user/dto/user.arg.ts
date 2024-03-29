import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class UserArg {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  fullname?: string;
}
