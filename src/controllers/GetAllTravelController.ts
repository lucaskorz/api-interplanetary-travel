import { GetAllTravelService } from '../services/GetAllTravelService'; 
import { Request, Response } from 'express';

export async function GetAllTravelController(
    request: Request, response: Response
  ): Promise<Response> {
  const travels = await GetAllTravelService()

  return response.status(200).json({ travels })
}