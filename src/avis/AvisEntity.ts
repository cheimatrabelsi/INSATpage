import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";
import { CommentEntity } from 'src/comment/CommentEntity';
import { AdminEntity } from 'src/admin/AdminEntity';


@Entity('avis')
export class AvisEntity extends timestampsEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    Description: string;
    @Column()
    content: string;
    @CreateDateColumn()
    creationDate: Date;
    @UpdateDateColumn()
    UpdateDate: Date;
    @DeleteDateColumn()
    DeleteDate: Date;

    @OneToMany(
        (Type) => CommentEntity,
        (comment: CommentEntity) => comment.avis,
        {
            /*on charge l'entité avec ses relation*/
            eager :true , 
            /*on supprime l'entité avec ses relation*/
            onDelete : CASCADE

        } 
      )
      comments: CommentEntity [];
    @OneToOne(
        (Type) => AdminEntity,
        (admin: AdminEntity) => admin.avis,
        {
            eager :true , 
            
        } 
      )
      admin: AdminEntity [];
    
   

}
