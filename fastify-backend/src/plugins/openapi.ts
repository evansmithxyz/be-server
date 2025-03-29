import { FastifyPluginAsync } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const openapiPlugin: FastifyPluginAsync = async (fastify) => {
  // Register Swagger (OpenAPI 3.0) plugin
  fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Fitness Tracker API',
        description: 'API documentation for the Fitness Tracker project',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local development server',
        },
        {
          url: 'http://localhost:8080', // Backend URL
          description: 'Local development server',
        },
      ],
      components: {}, // Add reusable components like schemas or security here
      tags: [
        {
          name: 'Auth',
          description: 'Authentication-related endpoints',
        },
        {
          name: 'Example',
          description: 'Example endpoints',
        },
        {
          name: 'User',
          description: 'Operations related to users',
        },
        {
          name: 'Workout',
          description: 'Operations related to workouts',
        },
      ],
    },
  });

  // Register Swagger UI plugin
  fastify.register(swaggerUi, {
    routePrefix: '/docs', // Swagger UI will be available at http://localhost:3000/docs
    staticCSP: true,
    transformStaticCSP: (header) => header,
  });
};

export default openapiPlugin;