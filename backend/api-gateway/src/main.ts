import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  {config as loadConfig}  from 'dotenv'; 

async function bootstrap() {
  loadConfig();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  })
  await app.listen(process.env.GATEWAY_PORT);
}
bootstrap();
