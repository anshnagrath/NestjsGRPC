"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    dotenv_1.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*'
    });
    await app.listen(process.env.GATEWAY_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map