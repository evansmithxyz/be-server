import { FastifyInstance } from 'fastify';
import { exampleHandler } from '../handlers/exampleHandler';

export default async function routes(fastify: FastifyInstance) {
  fastify.get('/example', exampleHandler);
  
  // Additional routes can be defined here
}