import { GetAllTravelRepository } from '../repository/GetAllTravelRepository'; 
import { Request, Response } from 'express';

export async function GetAllTravelController(
    request: Request, response: Response
  ): Promise<Response> {
  const travels = await GetAllTravelRepository()

  return response.status(200).json({ travels })
}