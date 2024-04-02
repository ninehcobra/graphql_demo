import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserSetting } from 'src/module/user_setting/model/user_setting.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';


@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  displayName?: string;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSetting;
}
