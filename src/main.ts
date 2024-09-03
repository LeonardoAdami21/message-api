import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appPort } from './env/envoriment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort, () => {
    console.log(
      `Application is running on: http://localhost:${appPort}/graphql`,
    );
  });
}
bootstrap();
