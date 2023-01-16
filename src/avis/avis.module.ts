import { Module } from '@nestjs/common';
import { AvisController } from './avis.controller';
import { AvisService } from './avis.service';
import { AvisEntity } from './avisEntity';

@Module({
  imports: [TypeOrmModule.forFeature([AvisEntity])],
  controllers: [AvisController],
  providers: [AvisService]
})
export class AvisModule {}
