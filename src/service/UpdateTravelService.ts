import { Travel }  from '../db/model/Travel'
import { AppDataSource } from '../db/dataSource';

export async function UpdateTravelService(
  id: string, pilotName: string, copilotName: string, originName: string,
  destinationName: string, starshipName: string
) {
  try {
    const repo = AppDataSource.getRepository(Travel);
    const travel = await repo.findOneBy({id});
  
    if(!travel) {
      return { error: 'Viagem não encontrada!' }
    }else{
      travel.copilotName = copilotName ? copilotName : travel.copilotName;
      travel.pilotName = pilotName ? pilotName : travel.pilotName;
      travel.originName = originName ? originName : travel.originName;
      travel.destinationName = destinationName ? destinationName : travel.destinationName;
      travel.starshipName = starshipName ? starshipName : travel.starshipName;
  
      await repo.save(travel);
  
      console.log('Atualizado viagem com o id ', travel.id)
      return travel;
    }
  }catch(err) {
    return { error: 'Erro ao tentar atualizar uma viagem: '+err.message }
  }
}