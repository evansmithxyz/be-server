import fastify from 'fastify';
import openapiPlugin from './plugins/openapi';
import routes from './routes/index';
import authRoutes from './routes/auth';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import homeRoute from './routes/home';
dotenv.config();

const app = fastify({ logger: true });


// Register plugins
app.register(openapiPlugin);
app.register(homeRoute); // Register the homepage route
app.register(routes);
app.register(authRoutes);

// Enable CORS
app.register(cors, {
  origin: ['http://localhost:3000', 'http://localhost:8080'], // Allow requests from the React frontend
});




const start = async () => {
  try {
    // Use Fastify's modern listen method with host and port
    const address = await app.listen({ port: 8080, host: '0.0.0.0' });
    app.log.info(`Server listening at ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// Start the server
start();