import { AppDataSource } from '../db/dataSource';
import { Travel } from '../db/model/Travel';

export async function GetAllTravelRepository() {
  try {
    return await AppDataSource.manager.createQueryBuilder()
      .select()
      .from(Travel, "travel")
      .getRawMany()
  }catch(err) {
    return { error: 'Erro ao tentar buscar todas as viagens: '+err.message }
  }
}