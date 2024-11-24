// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { AccountsModule } from './accounts/accounts.module';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-G8V90SS',
      database: 'e_db',
      username: 'taihoccode',
      password: '13162002Ko.',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      synchronize: false, 
    }),
    AccountsModule,
  ],
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
