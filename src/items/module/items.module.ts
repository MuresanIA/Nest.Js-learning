import { Module } from '@nestjs/common';

import { ItemsController } from './../controllers/items.controller';
import { ItemsService } from './../services/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from '../schemas/item.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
