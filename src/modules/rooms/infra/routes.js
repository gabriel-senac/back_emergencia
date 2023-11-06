import { Router } from 'express';
import { Controller } from './Controller.js';
import { Solicitacao } from './Controller.js';
import { Update } from './Controller.js';
import { Error } from './Controller.js'

export const usersRouter = Router();
const controller = new Controller();


usersRouter.get('/selecionarSalas', controller.getRooms)
usersRouter.post('/sendEmergency', controller.postRequerimento)
usersRouter.put('/sendUpdate', controller.putUpdate)
usersRouter.status('/sendError', controller.statusError)

