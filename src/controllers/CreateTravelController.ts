import { CreateTravelService } from '../services/CreateTravelService'
import { NextFunction, Request, Response } from 'express';

export async function CreateTravelController(
    request: Request, response: Response, next: NextFunction
  ): Promise<Response> {
    
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  await CreateTravelService(
    pilotName,
    copilotName,
    originName,
    destinationName,
    starshipName
  )

  return response.send('Viagem criada com sucesso!')
}