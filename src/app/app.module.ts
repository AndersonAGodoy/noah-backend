import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SermonsModule } from 'src/sermons/sermons.module';

@Module({
  imports: [SermonsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
