import { UpdateTravelService } from '../service/UpdateTravelService';
import { Request, Response } from 'express';

export async function UpdateTravelController(
    request: Request, response: Response
  ): Promise<Response> {
  const id: string = request.params.id;
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  const travel = await UpdateTravelService(
    id,
    pilotName,
    copilotName,
    originName,
    destinationName,
    starshipName
  )

  return response.status(201).json({ travel })
}