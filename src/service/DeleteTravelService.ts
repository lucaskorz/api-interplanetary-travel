import { AppDataSource } from '../db/dataSource';
import { Travel } from '../db/model/Travel';

export async function DeleteTravelService(id) {
  try {
    const repo = AppDataSource.getRepository(Travel);
    const travel = await repo.findOneBy({ id })

    if (!travel) {
      return { error: 'ID da viagem não encontrada para ser deletada' }
    }else{
      await repo.remove(travel)
      return { sucess: 'Deletado com sucesso!' }
    }
  }catch(err) {
    return { error: 'Erro ao tentar remover viagem com id: '+id+'. Erro: '+err.message }
  }
}