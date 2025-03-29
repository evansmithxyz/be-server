import { FastifyInstance } from 'fastify';

const homeRoute = async (fastify: FastifyInstance) => {
  fastify.get('/', {
    schema: {
      description: 'Homepage',
      tags: ['General'], // Group this endpoint under the "General" tag in Swagger
      response: {
        200: {
          description: 'Welcome message',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      reply.send({ message: 'Welcome to the Fitness Tracker API!' });
    },
  });
};

export default homeRoute;