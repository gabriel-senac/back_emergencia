import { Router } from 'express';
import { Controller } from './Controller.js';

export const roomsRouter = Router();
const controller = new Controller();


roomsRouter.get('/selecionarSalas/blocoA', controller.getRoomsA)
roomsRouter.get('/selecionarSalas/blocoB', controller.getRoomsB)
roomsRouter.post('/sendEmergency', controller.postRequerimento)
roomsRouter.put('/sendUpdate', controller.putUpdate)

