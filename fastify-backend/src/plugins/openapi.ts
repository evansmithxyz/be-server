import { FastifyPluginAsync } from 'fastify';
import { OpenAPIV3 } from 'openapi-types';

const openapiSpecification: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'Fastify Backend API',
    version: '1.0.0',
    description: 'A Fastify backend server utilizing OpenAPI 3 for API documentation and validation.',
  },
  paths: {
    '/example': {
      get: {
        summary: 'Get example data',
        operationId: 'getExample',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ExampleSchema',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      ExampleSchema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        required: ['id', 'name'],
      },
    },
  },
};

const openapiPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    swagger: openapiSpecification,
    exposeRoute: true,
  });
};

export default openapiPlugin;