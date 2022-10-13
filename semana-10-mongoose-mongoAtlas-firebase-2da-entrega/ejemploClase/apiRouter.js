import express from 'express';
import { Contenedor } from './Contenedor.js';
import { getController } from './getController.js';

export const apiRouter = express.Router();
apiRouter.get('/', getController);
