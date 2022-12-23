import dotenv from 'dotenv';

dotenv.config();

const getConfig = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`.env is missing the definition of an ${key} environmental variable`);
  return value;
};

const config = {
  audience: getConfig('AUTH0_AUDIENCE'),
  domain: getConfig('AUTH0_DOMAIN'),
  serverPort: getConfig('SERVER_PORT'),
  clientOriginUrl: getConfig('CLIENT_ORIGIN_URL'),
  clientOrigins: ['http://localhost:4040'],
};

export default config;
