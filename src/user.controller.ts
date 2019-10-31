import { Controller, Logger } from "@nestjs/common";
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { UserResponseDto } from "./dto/user-response.dto";

interface IUserId {
  userId: string;
}

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserController', 'findById')
  async findById(options: IUserId): Promise<UserResponseDto> {
    const { userId } = options;
    Logger.debug(`req -> findById: ${JSON.stringify(options)}`);
    return await this.appService.findById(userId);
  }
}
