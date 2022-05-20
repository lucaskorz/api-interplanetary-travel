import { Travel}  from '../db/entities/Travel'
import { AppDataSource } from '../db/dataSource';
import { v4 as uuid } from 'uuid'

export async function CreateTravelService(pilotName, copilotName, 
                                        originName, destinationName, starshipName) {
  const travel = new Travel();
  travel.id = uuid()
  travel.pilotName       = pilotName;
  travel.copilotName     = copilotName;
  travel.originName      = originName;
  travel.destinationName = destinationName;
  travel.starshipName    = starshipName;
  await AppDataSource.manager.save(travel);
}