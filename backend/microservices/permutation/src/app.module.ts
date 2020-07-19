import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PermutationService } from './permutation.service';
import { ConfigModule } from 'nestjs-dotenv';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PermutationService],
  
})
export class AppModule {}
