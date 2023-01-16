import { AvisEntity } from 'src/avis/AvisEntity';
import { UserEntity } from 'src/user/userEntity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('comment')
export class CommentEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    content: string;
    @CreateDateColumn()
    creationDate: Date;
    @UpdateDateColumn()
    UpdateDate: Date;
    @DeleteDateColumn()
    DeleteDate: Date;

    @ManyToOne(
        (Type) => AvisEntity,
        (avis: AvisEntity) => avis.comments,
        {} 
      )
      avis: AvisEntity;

    @ManyToOne(
        (Type) => UserEntity,
        (user: UserEntity) => user.comments,
        {
          /*on charge l'entité avec ses relation*/
          eager :true , 
          
        } 
      )
      user: UserEntity;

}



