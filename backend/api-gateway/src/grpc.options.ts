import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import  {config as loadConfig}  from 'dotenv'; 
loadConfig();
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.RPC_HOST}:${process.env.RPC_PORT}`,       
    package: process.env.PACKAGE_NAME,
    protoPath: join(__dirname, '../src/_proto/permutation.proto'),
  },
};
