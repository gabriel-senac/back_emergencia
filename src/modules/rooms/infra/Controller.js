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
  

    async postRequerimento(request, response) {
        const {room} = request.body;
        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }
        try {
            const [rows, fields] = await connection.query('INSERT INTO rooms WHERE room = ?', [room]);
            return response.status(201).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possivel criar emergencia da sala.' });
            }
    }
   
    async putUpdate(request, response) {
        const {room} = request.body

        if(room ===undefined || room === null ||  room === ''){
            return response.status(400).json({ message: 'Sala indefinida.' });
        }

        try {
            const [rows, fields] = await connection.query('Emergency call on', [room]);
            return response.status(200).json({message: "Emergencia da sala atualizada"});
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível atualizar a emergencia da sala.' });
            }
    }
  

}



