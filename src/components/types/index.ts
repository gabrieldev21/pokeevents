export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: string[];
  species: { name: string; url: string };
}

export interface ModalPokemonProps {
  id: number;
  name: string;
  sprites: Sprites;
  types: string[];
}
export interface IPokemonApi {
  types: TypesEntity[];
  id: number;
  name: string;
  sprites: Sprites;
  species: { name: string; url: string };
}

interface Other {
  dream_world: DreamWorldOrIcons;
}

interface DreamWorldOrIcons {
  front_default: string;
}

interface Sprites {
  front_default: string;
  other: Other;
}

export interface TypesEntity {
  type: TypeSpecie;
}

interface TypeSpecie {
  name: string;
  url: string;
}
