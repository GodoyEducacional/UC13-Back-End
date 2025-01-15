import { getAllCarros, getCarrosBySigla, createCarro as modelCreateCarro, updateCarro as modelUpdateCarro,  deleteCarro as modelDeleteCarro} from '../models/carroModel.js';

export const getCarros = (req, res) => {
    // Chama a função que retorna todos os carros do array 
    const carros = getAllCarros();
    // Retorna os carros com status 200 (OK)
    res.status(200).json(carros);
};