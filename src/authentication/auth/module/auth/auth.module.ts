import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from '../../../module/users/users.module';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStrategy } from '../../../strategy/local.strategy';
import { SessionSerializer } from '../../../serializer/session.serializer';

@Module({
    imports: [UsersModule, PassportModule.register({ session: true })],
    providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
