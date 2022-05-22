import { CreateTravelService } from '../services/CreateTravelService'
import { Request, Response } from 'express';

export async function CreateTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  const travel = await CreateTravelService(
    pilotName,
    copilotName,
    originName,
    destinationName,
    starshipName
  )

  return response.status(201).json({travel} )
}