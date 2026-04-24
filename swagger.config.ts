import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export function setupSwagger(app: Express, url: string) {
  const SWAGGER_OPTIONS = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'AWS S3 Multipart',
        version: '1.0.1',
        description: 'API documentation for AWS S3 Multipart upload service.',
        contact: {
          name: 'Orji Michael',
          email: 'orjimichael4886@gmail.com',
        },
      },
      servers: [
        {
          url,
        },
      ],
    },
    apis: ['**/*.ts'],
  };
  const swaggerSpec = swaggerJSDoc(SWAGGER_OPTIONS);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
