import { AvisEntity } from 'src/avis/avisEntity';
import { CommentEntity } from 'src/comment/CommentEntity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";


@Entity('admin')
export class AdminEntity extends timestampsEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 15 })
    firstName: string;

    @Column("varchar", { length: 15 })
    lastName:string;

    @Column({update:false, unique: true })
    email:string;

    @OneToOne(
        (Type) => AvisEntity,
        (avis: AvisEntity) => avis.admin,
        {

        } 
      )
      avis: AvisEntity ;
}