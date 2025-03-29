import { FastifyReply, FastifyRequest } from 'fastify';

export const exampleHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'Hello, this is an example endpoint!' });
};