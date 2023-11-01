import { connection } from '../../../connection.js'

export class Controller {


    async getRooms(request, response) {
        try {
            const [rows, fields] = await connection.query('SELECT * FROM users');
            return response.status(200).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível identificar as salas.' });
            }
    }
  

    async postRequerimento(request, response) {
        const {room} = request.body;
        try {
            const [rows, fields] = await connection.query('INSERT INTO rooms WHERE room = ?', [room]);
            return response.status(200).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível identificar as salas.' });
            }
    }
   
    async putUpdate(request, response) {
        const {room} = request.body
        try {
            const [rows, fields] = await connection.query('Emergency call on', [room]);
            return response.status(200).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível identificar as salas.' });
            }
    }
    
    async statusError(request, response) {
        const {room} = request.body
        try {
            const [rows, fields] = await connection.query('/');
            return response.status(400).json(rows);
            } catch (error) {
                console.error(error);
                return response.status(500).json({ message: 'Não foi possível identificar as salas.' });
            }
    }
  

}



