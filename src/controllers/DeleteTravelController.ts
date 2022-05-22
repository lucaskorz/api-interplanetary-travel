import { DeleteTravelRepository } from '../repository/DeleteTravelRepository';
import { Request, Response } from 'express';

export async function DeleteTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { id } = request.params;

  await DeleteTravelRepository(id)

  return response.status(201).json({ delete: 'Viagem deletada com sucesso!' })
}