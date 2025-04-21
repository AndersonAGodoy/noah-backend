import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @Post()
  create(@Body() createSermonDto: CreateSermonDto) {
    return this.sermonsService.create(createSermonDto);
  }

  @Get()
  findAll(
    @Query('cursor') cursor?: string,
    @Query('limit') limit = '10',
    @Query('eventType') eventType?: string | string[],
  ) {
    return this.sermonsService.findAll({
      cursor,
      limit: parseInt(limit, 10),
      eventType,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sermonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSermonDto: UpdateSermonDto) {
    return this.sermonsService.update(id, updateSermonDto);
  }

  @Patch(':id/publish')
  publish(@Param('id') id: string) {
    return this.sermonsService.publish(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sermonsService.remove(id);
  }
}
