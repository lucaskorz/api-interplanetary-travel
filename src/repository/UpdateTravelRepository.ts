import { Travel }  from '../db/model/Travel'
import { AppDataSource } from '../db/dataSource';

export async function UpdateTravelRepository(
  id: string,  pilotName: string, copilotName: string, originName: string,
  destinationName: string, starshipName: string
) {
  const travel = new Travel();
  travel.pilotName       = pilotName;
  travel.copilotName     = copilotName;
  travel.originName      = originName;
  travel.destinationName = destinationName;
  travel.starshipName    = starshipName;

  console.log('Atualizado viagem com o id ', travel.id)
  //return await AppDataSource.manager.update(id);
}