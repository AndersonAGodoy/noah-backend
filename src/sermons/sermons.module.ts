import { Module } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { SermonsController } from './sermons.controller';

@Module({
  controllers: [SermonsController],
  providers: [SermonsService],
})
export class SermonsModule {}
