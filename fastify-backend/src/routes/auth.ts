import { FastifyInstance } from 'fastify';
import registerRoute from './auth/register';
import loginRoute from './auth/login';

const authRoutes = async (fastify: FastifyInstance) => {
  console.log('Auth routes registered'); // Debugging log

  // Register the /register route
  fastify.register(registerRoute);

  // Register the /login route
  fastify.register(loginRoute);
};

export default authRoutes;