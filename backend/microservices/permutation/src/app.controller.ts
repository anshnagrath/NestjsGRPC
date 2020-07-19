import { Controller, Logger } from '@nestjs/common';
import { PermutationService } from './permutation.service';
import { GrpcMethod } from '@nestjs/microservices'; 
import { encodedNameRPCRequest,decodedNameRPCResponse } from './permutation.interface';
@Controller()
export class AppController {
  private logger = new Logger('PermutationService');
  constructor(private permutationService: PermutationService) {}
  @GrpcMethod('PermutationController', 'decodeHeroName')                                     
  decodeHeroName(numberArray: encodedNameRPCRequest ) : decodedNameRPCResponse  { 
    this.logger.log('Decoding Requested String ' + numberArray.data.toString()); 
    return     this.permutationService.decodeSuperHeroName(numberArray.data) ; 
  }
}
