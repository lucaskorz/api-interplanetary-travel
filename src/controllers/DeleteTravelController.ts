import { DeleteTravelService } from '../service/DeleteTravelService';
import { Request, Response } from 'express';

export async function DeleteTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const id:  string = request.params.id;

  const travel = await DeleteTravelService(id)

  return response.status(201).json(travel);
}