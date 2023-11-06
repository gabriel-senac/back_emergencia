import {Router} from 'express';
import { roomsRouter } from './modules/rooms/infra/routes.js';

const routes = Router();

routes.use('/rooms', roomsRouter);

export default routes