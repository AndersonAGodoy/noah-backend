import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SermonsModule } from 'src/sermons/sermons.module';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';

@Module({
  imports: [SermonsModule, UserModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
