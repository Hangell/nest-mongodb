import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
            MongooseModule.forRoot(''),
            TasksModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
