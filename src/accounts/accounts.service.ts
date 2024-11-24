import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './accounts.repository';
import { Account } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}
  
  async getAllAccounts(): Promise<Account[]> {
    return await this.accountRepository.getAllAccounts();
  }
}
