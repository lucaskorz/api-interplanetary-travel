import { AppDataSource } from '../db/dataSource';
import { Travel } from '../db/model/Travel';

export async function GetTravelByIdService(id: string) {
  try {
    const repo = AppDataSource.getRepository(Travel);
    const travel: Travel = await repo.findOneBy({ id });

    if (!travel){
      return { error: 'Viagem não encontrada para consulta!' }
    }else{
      return travel;
    }
  }catch(err) {
    return { error: 'Erro ao tentar buscar viagem com id: '+id+'. Erro: '+err.message }
  }
}