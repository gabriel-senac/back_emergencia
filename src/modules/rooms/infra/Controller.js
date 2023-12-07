import { connection } from '../../../connection.js'

export class Controller {


    async getRoomsA(request, response) {
        try {
            const [rows, fields] = await connection.query('SELECT * FROM blocoA');
            console.log(rows);
            return response.status(200).json([rows]);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível obter as salas.' });
            }
    }
  
    async getRoomsB(request, response) {
        try {
            const [rows, fields] = await connection.query('SELECT * FROM blocoB');
            console.log(rows);
            return response.status(200).json([rows]);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível obter as salas.' });
            }
    }
  

    async postRequerimentoBlocoA(request, response) {
        const {room} = request.body;
        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }
        try {
            const [rows, fields] = await connection.query('UPDATE blocoA SET Emergencia = 1 WHERE ID_Sala = ?', [room]);
            return response.status(201).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possivel criar emergencia da sala.' });
            }
    }

    async postRequerimentoBlocoB(request, response) {
        const {room} = request.body;
        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }
        try {
            const [rows, fields] = await connection.query('UPDATE blocoB SET Emergencia = 1 WHERE ID_Sala = ?', [room]);
            return response.status(201).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possivel criar emergencia da sala.' });
            }
    }
   
    async putUpdateblocoA(request, response) {
        const {room} = request.body

        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }

        try {
            const [rows, fields] = await connection.query('UPDATE blocoA SET Emergencia = 0 WHERE ID_sala = ?', [room]);
            return response.status(200).json({message: "Emergencia da sala atualizada"});
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível atualizar a emergencia da sala.' });
            }
    }

    async putUpdateblocoB(request, response) {
        const {room} = request.body

        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }

        try {
            const [rows, fields] = await connection.query('UPDATE blocoB SET Emergencia = 0 WHERE ID_sala = ?', [room]);
            return response.status(200).json({message: "Emergencia da sala atualizada"});
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível atualizar a emergencia da sala.' });
            }
    }
  

}



