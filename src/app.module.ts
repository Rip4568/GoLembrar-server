import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ReminderModule } from './reminder/reminder.module';
import { CategoryModule } from './category/category.module';
import { ContactModule } from './contact/contact.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/docs',
    }),
    UserModule,
    AuthModule,
    ReminderModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}