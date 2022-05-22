import { GetTravelByIdService } from '../services/GetTravelByIdService'; 
import { Request, Response } from 'express';

export async function GetTravelByIdController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { id } = request.params;

  const travel = await GetTravelByIdService(id)

  return response.status(204).json({ travel })
}