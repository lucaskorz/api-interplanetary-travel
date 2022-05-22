import { GetTravelByIdRepository } from '../repository/GetTravelByIdRepository'; 
import { Request, Response } from 'express';

export async function GetTravelByIdController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { id } = request.params;

  const travel = await GetTravelByIdRepository(id)

  return response.status(200).json(travel)
}