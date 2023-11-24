import cors from 'cors';
import express from 'express';
import './connection.js';
import http from 'http';
import routes from './routes.js'

const app = express()

const server = http.createServer(app);

const port = process.env.PORT || 3000;


app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(port, () => console.log(`Servidor Iniciado na porta ${port}`));

