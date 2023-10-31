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
  




}