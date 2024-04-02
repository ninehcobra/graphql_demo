import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/model/user.model';
import { UserSetting } from './model/user_setting.model';
import { CreateUserSettingsInput } from './dto';

@Injectable()
export class UserSettingService {
    constructor(
        @InjectRepository(UserSetting)
        private userSettingsRepository: Repository<UserSetting>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    getUserSettingById(userId: number) {
        return this.userSettingsRepository.findOneBy({ userId });
    }

    async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
        const findUser = await this.userRepository.findOneBy({
            id: createUserSettingsData.userId,
        });

        if (!findUser) throw new Error('User Not Found');

        const newUserSetting = this.userSettingsRepository.create(
            createUserSettingsData,
        );
        const savedSettings =
            await this.userSettingsRepository.save(newUserSetting);

        findUser.settings = savedSettings;
        await this.userRepository.save(findUser);

        return savedSettings;
    }
}
