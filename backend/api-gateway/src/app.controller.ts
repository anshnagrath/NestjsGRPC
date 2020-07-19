import { Controller, Logger, Post, Body, OnModuleInit } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('API-GateWay');
  @Client(microserviceOptions) 
  private client: ClientGrpc; 
  private  permutationService: IGrpcService;
  onModuleInit() {                                                         
    this.permutationService = this.client.getService<IGrpcService>('PermutationController'); 
  }                                                               
  @Post('decode')
  async decodeHeroName(@Body('data') data:string)  {
    this.logger.log('Calling Permutation Service to compute ' + data.toString());
    return this.permutationService.decodeHeroName( { data } )
  }
}
