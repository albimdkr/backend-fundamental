// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server its run on ${server.info.uri}`);
};

init();
