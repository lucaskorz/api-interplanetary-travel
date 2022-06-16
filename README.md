# VIAGENS INTERPLENETÁRIAS

#### TESTE - FSIS - Sisplan

O projeto foi desenvolvido com Node Express, em Typescript utilizando o TypeORM para conversar com o postgres.
Temos as rotas, uma possui um middleware, passando no middleware (ou não tendo middleware) chama-se o controller,
o controller chama o service e o service (TypeORM) faz o procedimento no banco de dados.

Temos também versionamento do banco de dados utilizando as migrations do TypeORM, rodando as migrations o 
banco de dados se mantém atualizado.
E também possui alguns testes básicos com JEST testando post, put e delete de viagens.

Comando pra rodar as migrations: yarn typeorm -- migration:run -d src/db/dataSource.ts

##### Rotas:
POST - /viagens - Cria uma viagem.
Exemplo de body no formato JSON: 
{
	"pilotName": "Luke Skywalker",
	"copilotName": "Owen Lars",
	"originName": "Tatooine",
	"destinationName": "Alderaan",
	"starshipName": "CR90 corvette"
}

PUT - /viagens/:id - Atualiza uma viagem

DELETE - /viagens/:id - Deleta uma viagem

GET - /viagens - consulta todas as viagens cadastradas

GET - /viagens/:id - consulta uma viagem específica


##### Rotas da API pública:

/personagens

/especies

/naves

/planetas

