import { AppDataSource } from '../db/dataSource';
import { Travel } from '../db/model/Travel';

export async function DeleteTravelRepository(id) {
  console.log('Deletado viagem com o id ', id)
  return await AppDataSource.manager.createQueryBuilder()
      .delete().from(Travel).where("id = :id", { id: id })
      .execute();
}