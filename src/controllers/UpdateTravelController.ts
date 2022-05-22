import { UpdateTravelRepository } from '../repository/UpdateTravelRepository';
import { Request, Response } from 'express';

export async function UpdateTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { id } = request.params;
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  const travel = await UpdateTravelRepository(
    id,
    pilotName,
    copilotName,
    originName,
    destinationName,
    starshipName
  )

  return response.status(201).json({ travel })
}