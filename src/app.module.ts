import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from "./config/config.service";
import { ConfigModule } from "./config/config.module";
import { User } from "./model/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, User],
      useFactory: (config: ConfigService) =>
        config.GetPostgresTypeOrmConfig(),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}
