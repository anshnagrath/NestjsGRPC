import { OnModuleInit } from '@nestjs/common';
export declare class AppController implements OnModuleInit {
    private logger;
    private client;
    private permutationService;
    onModuleInit(): void;
    decodeHeroName(data: string): Promise<import("rxjs").Observable<any>>;
}
