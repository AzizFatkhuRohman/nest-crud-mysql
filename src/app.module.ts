import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';
import { Activity } from './activity/entities/activity.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Note } from './note/entities/note.entity';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_mysql',
      entities: [Activity,Note],
      synchronize: true,
    }),
    ActivityModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
