import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions} from "@nestjs/common/interfaces/microservices/microservice-configuration.interface";
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";
import {Logger} from "@nestjs/common";

const protoDir = join(__dirname, '..', 'protos');
const microServiceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: './src/protos/app.proto',
    loader: {
      keepCase: false,
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      includeDirs: [protoDir],
    },
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microServiceOptions);
  await app.listen(() => {
    Logger.log('MicroService is listening...');
  });
}
bootstrap();
