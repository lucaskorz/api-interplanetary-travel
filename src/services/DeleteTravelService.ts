import { Travel }  from '../db/model/Travel'
import { AppDataSource } from '../db/dataSource';

export async function DeleteTravelService(id) {
  const travel = new Travel();

  console.log('Deletado viagem com o id ', id)
  //return await AppDataSource.manager.delete(travel.id);
}