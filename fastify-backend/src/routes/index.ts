import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { exampleHandler } from '../handlers/exampleHandler';

const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  // Example route
  fastify.get('/example', {
    schema: {
      url: '/example',
      method: 'GET',
      description: 'Example endpoint',
      tags: ['Example'],
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
  }, exampleHandler);

  // Additional routes can be defined here
};

export default routes;