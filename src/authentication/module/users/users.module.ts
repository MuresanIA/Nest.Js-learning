import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from '../../interfaces/user.model';
import { UsersController } from '../../controllers/users/users.controller';
import { UsersService } from '../../services/users/users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
