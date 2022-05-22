import { DeleteTravelService } from '../services/DeleteTravelService';
import { Request, Response } from 'express';

export async function DeleteTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { id } = request.params;

  await DeleteTravelService(id)

  return response.status(204).send('ID '+id+' deletado com sucesso!')
}