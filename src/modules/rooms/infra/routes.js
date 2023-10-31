import { Router } from 'express';
import { Controller } from './Controller.js';

export const usersRouter = Router();
const controller = new Controller();

usersRouter.get('/selecionarSalas', controller.getRooms)



