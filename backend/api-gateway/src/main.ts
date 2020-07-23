import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  {config as loadConfig}  from 'dotenv'; 

async function bootstrap() {
  loadConfig();
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  //   res.header('Access-Control-Allow-Methods', '*');
  //   res.header('Access-Control-Allow-Headers', '*');
  //   next();
  // });
  await app.listen(process.env.GATEWAY_PORT);
}
bootstrap();
