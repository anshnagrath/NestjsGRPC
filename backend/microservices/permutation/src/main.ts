import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path'; 
import  {config as loadConfig}  from 'dotenv'; 
const logger = new Logger('PermutationService');
async function bootstrap() {
  loadConfig()
  const microserviceOptions = {
    transport: Transport.GRPC,  
    options: {
      url: `${process.env.RPC_HOST}:${process.env.RPC_PORT}`,       
      package: process.env.PACKAGE_NAME,
      protoPath: join(__dirname, '../src/_proto/permutation.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true
      }
    },
  };
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);

  app.listen(() => {
    logger.log('Permutation Microservice is listening...');
  });
}
bootstrap();
