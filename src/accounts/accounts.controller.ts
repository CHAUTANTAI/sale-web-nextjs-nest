import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    console.log("getAllAccounts");
    return await this.accountsService.getAllAccounts(); 
  }
}
