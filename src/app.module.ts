import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ only for dev
    }),
  ],
})
export class AppModule{}