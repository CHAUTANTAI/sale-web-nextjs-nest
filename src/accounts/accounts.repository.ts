// src/accounts/accounts.repository.ts
import { Repository, DataSource } from 'typeorm';
import { Account } from './accounts.entity';
import { Injectable } from '@nestjs/common';

@Injectable() // 
export class AccountRepository extends Repository<Account> {
  constructor(private dataSource: DataSource) {
    super(Account, dataSource.createEntityManager());
  }
  // call stored procedure
  async getAllAccounts(): Promise<Account[]> {
    const query = 'EXEC sp_GetAllAccounts';
    const result = await this.query(query);

    // Mapping Object
    return result.map((account: Account) => {
      return {
        AccountID: account.AccountID,
        Email: account.Email,
        PasswordHash: account.PasswordHash,
        IsActive: account.IsActive,
        CreatedAt: account.CreatedAt,
        UpdatedAt: account.UpdatedAt,
        RoleID: account.RoleID,
      };
    });
  }
}
