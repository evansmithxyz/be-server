import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const registerRoute = async (fastify: FastifyInstance) => {
  fastify.post('/register', {
    schema: {
      description: 'Register a new user',
      tags: ['Auth'], // Group this endpoint under the "Auth" tag in Swagger
      body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: { type: 'string', description: 'The name of the user' },
          email: { type: 'string', format: 'email', description: 'The email of the user' },
          password: { type: 'string', description: 'The password of the user' },
        },
      },
      response: {
        201: {
          description: 'User successfully registered',
          type: 'object',
          properties: {
            id: { type: 'number', description: 'The ID of the user' },
            email: { type: 'string', description: 'The email of the user' },
          },
        },
        400: {
          description: 'Email is already registered',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      console.log('Register endpoint registered'); // Debugging log

      const { name, email, password } = request.body as {
        name: string;
        email: string;
        password: string;
      };

      // Check if the email is already registered
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return reply.status(400).send({ error: 'Email is already registered' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      reply.status(201).send({ id: user.id, email: user.email });
    },
  });
};

export default registerRoute;