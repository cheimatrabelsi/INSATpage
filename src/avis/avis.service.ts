import { Injectable } from '@nestjs/common';
import { AvisDto } from './avisDto';
import { AvisEntity } from './avisEntity';

@Injectable()
export class AvisService {

    constructor(
        @InjectRepository(AvisEntity)
        private avisRepository: Repository<AvisEntity>
      ) {}

      create(AvisDto): Promise<AvisEntity> {
        return this.avisRepository.save(AvisDto);
      }
    
      findAll(): Promise<AvisEntity[]> {
        return this.avisRepository.find();
      }
      async findWithComments(id: string): Promise<AvisEntity> {
        return this.avisRepository
          .createQueryBuilder('avis')
          .leftJoinAndSelect('avis.comments', 'comments')
          .where('avis.id = :id', { id })
          .getOne();
      }
      async findOne(id): Promise<AvisEntity> {
        const Entity = await this.avisRepository.findOne({where: {id}});
        if (! Entity) {
          throw new NotFoundException();
        }
        return Entity;
      }
    
      async update(id, AvisDto) {
        const Entity = await this.avisRepository.preload({id,...AvisDto});
        if (! Entity) {
          throw new NotFoundException();
        }
        return this.avisRepository.save(Entity);
      }
    
      async remove(id): Promise<AvisEntity> {
        const result = await this.avisRepository.softDelete(id);
        if (!result.affected){
          throw new NotFoundException();
        }
        return result;
      }
     
}
