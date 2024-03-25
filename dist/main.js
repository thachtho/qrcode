"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'abc',
            queueOptions: {
                durable: false,
                arguments: {
                    'x-max-priority': 255,
                },
            },
        },
    });
    app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map