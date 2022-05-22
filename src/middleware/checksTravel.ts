
import fetch from 'node-fetch';

export async function checksTravel(request, response, next) {
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  let pilot: string;
  let copilot: string;
  let planetOrig : string;
  let planetDest : string;
  let starship: string;
  let droidPilot: number;
  let droidCoPilot: number;
  let pilotoDroid: boolean;
  let copilotDroid: boolean;
  let url: string = 'https://swapi.dev/api/';

  if (pilotName === copilotName) {
    return response.status(400).json(({ error: "Piloto e Copiloto não podem ser a mesma pessoa" }))
  }

  if (originName === destinationName) {
    return response.status(400).json(({ error: "O planeta destino deve ser diferente do planeta de origem" }))
  }

  await fetch(url+'people')
        .then((resp) => resp.json())
        .then(function(data: any) {
    let peoples = data.results
    pilot = peoples.find((people) => people.name === pilotName)
    copilot = peoples.find((people) => people.name === copilotName)

    droidPilot = peoples.findIndex((people) => people.name === pilotName) +1
    droidCoPilot = peoples.findIndex((people) => people.name === copilotName) +1
  }).catch(function(err) {
    console.log('Não foi possível acessar a API Swapi para consultar people.', err)
  });

  if (!pilot) {
    return response.status(400).json(({ error: "O piloto informado não existe!" }))
  } else {
    await fetch(url+'people/'+droidPilot)
          .then((resp) => resp.json())
          .then(function(data: any) { 
      if (data.species[0] === 'https://swapi.dev/api/species/2/') {
        pilotoDroid = true;
      }else{
        pilotoDroid = false;
      }
    }).catch(function(err) {
      console.log('Não foi possível acessar a API Swapi para consultar people '+droidPilot+'.', err)
    });
  }

  if (!copilot) {
    return response.status(400).json(({ error: "O copiloto informado não existe!" }))
  } else {
    await fetch(url+'people/'+droidCoPilot)
          .then((resp) => resp.json())
          .then(function(data: any) { 
      if (data.species[0] === 'https://swapi.dev/api/species/2/') {
        copilotDroid = true;
      }else{
        copilotDroid = false;
      }
    }).catch(function(err) {
      console.log('Não foi possível acessar a API Swapi para consultar people '+droidCoPilot+'.', err)
    });
  }

  await fetch(url+'planets')
        .then((resp) => resp.json())
        .then(function(data: any) {
    let planets = data.results
    planetOrig = planets.find((planet) => planet.name === originName)
    planetDest = planets.find((planet) => planet.name === destinationName)
  }).catch(function(err) {
    console.log('Não foi possível acessar a API Swapi para consultar planetas.', err)
  });

  if (!planetOrig) {
    return response.status(400).json(({ error: "O planeta origem informado não existe!" }))
  }

  if (!planetDest) {
    return response.status(400).json(({ error: "O planeta destino informado não existe!" }))
  }

  await fetch(url+'starships')
        .then((resp) => resp.json())
        .then(function(data: any) {
    let starships = data.results
    starship = starships.find((starship) => starship.name === starshipName)
  }).catch(function(err) {
    console.log('Não foi possível acessar a API Swapi para consultar naves', err)
  });

  if (!starship) {
    return response.status(400).json(({ error: "A nave informada não existe!" }))
  }

  if (pilotoDroid || copilotDroid) {
    return next() 
  } else {
    return response.status(400).json(({ error: "O piloto ou o copiloto precisa ser da espécie Droid!" }))
  }
}