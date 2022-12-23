/**
 * Required External Modules
 */

import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/env.dev';
import messagesRouter from './messages/messages.router';

const { clientOrigins, serverPort } = config;

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use('/api', apiRouter);

apiRouter.use('/messages', messagesRouter);

const errorHandler: ErrorRequestHandler = function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
};

app.use(errorHandler);

/**
 * Server Activation
 */

app.listen(serverPort, () => console.log(`API Server listening on port ${serverPort}`));
