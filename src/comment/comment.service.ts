import { Injectable } from '@nestjs/common';
import { CommentEntity } from './CommentEntity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentEntity)
        private commentRepository: Repository<CommentEntity>
      ) {}

      create(CommentDto): Promise<CommentEntity> {
        return this.commentRepository.save(CommentDto);
      }
    
      findAll(): Promise<CommentEntity[]> {
        return this.commentRepository.find();
      }
    
      async findOne(id): Promise<CommentEntity> {
        const Entity = await this.commentRepository.findOne({where: {id}});
        if (! Entity) {
          throw new NotFoundException();
        }
        return Entity;
      }
    
      async update(id, CommentDto) {
        const Entity = await this.commentRepository.preload({id,...CommentDto});
        if (! Entity) {
          throw new NotFoundException();
        }
        return this.commentRepository.save(Entity);
      }
    
      async remove(id): Promise<CommentEntity> {
        const result = await this.commentRepository.softDelete(id);
        if (!result.affected){
          throw new NotFoundException();
        }
        return result;
      }
    
}
