import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Accounts') //Match SQL Name
export class Account {
  @PrimaryGeneratedColumn()
  AccountID!: number;

  @Column()
  Email: string;

  @Column()
  PasswordHash: string;

  @Column({ default: true })
  IsActive: boolean;

  @Column()
  CreatedAt: Date;

  @Column()
  UpdatedAt: Date;

  @Column()
  RoleID: number;

  /**
   * Constructor is required
   */
  constructor(
    email: string,
    passwordHash: string,
    roleID: number,
    isActive: boolean = true,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
  ) {
    this.Email = email;
    this.PasswordHash = passwordHash;
    this.RoleID = roleID;
    this.IsActive = isActive;
    this.CreatedAt = createdAt;
    this.UpdatedAt = updatedAt;
  }
}
