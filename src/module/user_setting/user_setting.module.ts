import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/model/user.model';
import { UserSetting } from './model/user_setting.model';
import { UserSettingService } from './user_setting.service';
import { UserSettingsResolver } from './user_setting.resolver';


@Module({
    imports: [TypeOrmModule.forFeature([User, UserSetting])],
    providers: [
        UserSettingService,
        UserSettingsResolver,
    ],
})
export class UserSettingModule { }
