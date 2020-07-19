import { PermutationService } from './permutation.service';
import { encodedNameRPCRequest, decodedNameRPCResponse } from './permutation.interface';
export declare class AppController {
    private permutationService;
    private logger;
    constructor(permutationService: PermutationService);
    decodeHeroName(numberArray: encodedNameRPCRequest): decodedNameRPCResponse;
}
