import fastify from 'fastify';
import openapiPlugin from './plugins/openapi';
import routes from './routes/index';

const app = fastify({ logger: true });

app.register(openapiPlugin);
app.register(routes);

const start = async () => {
  try {
    await app.listen(3000);
    app.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();