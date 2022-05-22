import { AppDataSource } from '../db/dataSource';
import { Travel } from '../db/model/Travel';

export async function GetTravelByIdRepository(id: string) {
  try {
    return await AppDataSource.manager.createQueryBuilder()
    .select()
    .from(Travel, "travel")
    .where('travel.id = :id', { id: id})
    .getRawOne()
  }catch(err) {
    return { error: 'Erro ao tentar buscar viagem com id: '+id+'. Erro: '+err.message }
  }
}