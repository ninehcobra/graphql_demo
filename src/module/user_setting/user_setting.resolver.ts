import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UserSetting } from './model/user_setting.model';
import { CreateUserSettingsInput } from './dto';
import { UserSettingService } from './user_setting.service';

@Resolver()
export class UserSettingsResolver {
    constructor(private userSettingsService: UserSettingService) { }

    @Mutation((returns) => UserSetting)
    async createUserSettings(
        @Args('createUserSettingsData')
        createUserSettingsData: CreateUserSettingsInput,
    ) {
        const userSetting = await this.userSettingsService.createUserSettings(
            createUserSettingsData,
        );
        return userSetting;
    }
}
