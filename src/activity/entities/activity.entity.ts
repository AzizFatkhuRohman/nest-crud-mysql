import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    description:string;
}
