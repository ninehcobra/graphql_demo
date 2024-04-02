import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserSettingService } from '../user_setting/user_setting.service';
import { UserSettingsResolver } from '../user_setting/user_setting.resolver';
import { UserSetting } from '../user_setting/model/user_setting.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserResolver, UserService, UserSettingService],
})
export class UserModule { }
