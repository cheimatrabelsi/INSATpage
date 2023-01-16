import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvisModule } from './avis/avis.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AvisModule, CommentModule, UserModule, AdminModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
