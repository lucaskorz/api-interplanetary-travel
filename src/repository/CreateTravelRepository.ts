import { Travel }  from '../db/model/Travel'
import { AppDataSource } from '../db/dataSource';
import { v4 as uuid } from 'uuid'

export async function CreateTravelRepository(
  pilotName: string, copilotName: string, originName: string,
  destinationName: string, starshipName: string
) {
  try {
    const travel = new Travel();
    travel.id = uuid()
    travel.pilotName       = pilotName;
    travel.copilotName     = copilotName;
    travel.originName      = originName;
    travel.destinationName = destinationName;
    travel.starshipName    = starshipName;

    console.log('Criado nova viagem com o id ', travel.id)
    return await AppDataSource.manager.save(travel);
  }catch(err) {
    console.log('Erro ao tentar cadastrar nova viagem: ',err.message)
    return err.message;
  }
}