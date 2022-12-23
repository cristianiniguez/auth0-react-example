/**
 * Required External Modules and Interfaces
 */

import express from 'express';
import { getPublicMessage, getProtectedMessage } from './messages.service';
import { checkJwt } from '../authz/check-jwt';

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get('/public-message', (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.get('/protected-message', checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

export default messagesRouter;
