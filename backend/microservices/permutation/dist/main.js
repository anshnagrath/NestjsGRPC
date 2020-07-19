"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const dotenv_1 = require("dotenv");
const logger = new common_1.Logger('PermutationService');
async function bootstrap() {
    dotenv_1.config();
    const microserviceOptions = {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: `${process.env.RPC_HOST}:${process.env.RPC_PORT}`,
            package: process.env.PACKAGE_NAME,
            protoPath: path_1.join(__dirname, '../src/_proto/permutation.proto'),
            loader: {
                enums: String,
                objects: true,
                arrays: true
            }
        },
    };
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microserviceOptions);
    app.listen(() => {
        logger.log('Permutation Microservice is listening...');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map