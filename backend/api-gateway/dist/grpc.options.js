"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: `${process.env.RPC_HOST}:${process.env.RPC_PORT}`,
        package: process.env.PACKAGE_NAME,
        protoPath: path_1.join(__dirname, '../src/_proto/permutation.proto'),
    },
};
//# sourceMappingURL=grpc.options.js.map