import { Router } from 'express';
import { Controller } from './Controller.js';

export const roomsRouter = Router();
const controller = new Controller();


roomsRouter.get('/selecionarSalas', controller.getRooms)
roomsRouter.post('/sendEmergency', controller.postRequerimento)
roomsRouter.put('/sendUpdate', controller.putUpdate)

