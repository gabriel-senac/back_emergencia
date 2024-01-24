import { Controller } from "../Controller";

import { connection } from "../../../../connection"

jest.mock('../../../../connection')

//DESCRIBE - 
//IT 
//EXPECT

describe('Controller', () => {

    let controller;

    beforeEach(() => {
        controller = new Controller();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getRoomsA', () => {
        it('should get rooms from blocoA', async () => {
            const mockRows = [{ sala: 'Sala A1' }];

            connection.query.mockResolvedValueOnce([mockRows, null])

            const mockRequest = {};
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }

            await controller.getRoomsA(mockRequest, mockResponse);

            expect(connection.query).toHaveBeenCalledWith('SELECT * FROM blocoA');
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith([mockRows]);
        });

        // it('should handle error and return 500 status', async () => {

        //     const mockError = new Error('Database Error');

        //     connection.query.mockResolvedValueOnce([mockError, null])

        //     const mockRequest = {};
        //     const mockResponse = {
        //         status: jest.fn().mockReturnThis(),
        //         json: jest.fn()
        //     }

        //     await controller.getRoomsA(mockRequest, mockResponse);

        //     expect(connection.query).toHaveBeenCalledWith('SELECT * FROM blocoA');
        //     expect(mockResponse.status).toHaveBeenCalledWith(500);
        //     expect(mockResponse.json).toHaveBeenCalledWith({
        //         message: 'Não foi possivel obter as salas'
        //     });


        // });

    });

    describe('getRoomsB', () => {
        it('should get rooms from blocoB', async () => {
            const mockRows = [{ sala: 'Sala B1' }];

            connection.query.mockResolvedValueOnce([mockRows, null])

            const mockRequest = {};
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }

            await controller.getRoomsB(mockRequest, mockResponse);

            expect(connection.query).toHaveBeenCalledWith('SELECT * FROM blocoB');
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith([mockRows]);
        });

    });

});

