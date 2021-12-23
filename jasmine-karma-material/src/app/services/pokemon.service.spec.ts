import { TestBed } from '@angular/core/testing';
//import { PokemonPaginatorModel } from '../shared/models/pokemons/pokemon-paginator.model';
import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('retornar uma coleção de pokemons', () => {
      //given (cenário)
      const pokemonResponse = {
        count: 1118,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
        ],
      };
      //execução
      service.getAll().subscribe((res: any) => {
        //validação
        expect(res).toEqual(pokemonResponse);
      });
    });
  });
});
