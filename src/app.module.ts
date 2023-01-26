import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { ItemsModule } from './items/module/items.module';
import { UsersModule } from './authentication/module/users/users.module';
import { AuthService } from './authentication/auth/services/auth/auth.service';
import { AuthModule } from './authentication/auth/module/auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
