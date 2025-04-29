import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "items", schema: "dbo" })
export class items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Column({ type: "int" })
    weight: number;
}
