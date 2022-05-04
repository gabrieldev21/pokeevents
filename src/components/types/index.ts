export interface Pokemon {
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
}

interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: Other;
}

interface Other {
  dream_world: DreamWorldOrIcons;
}

interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}

export interface TypesEntity {
  slot: number;
  type: TypeSpecie;
}

interface TypeSpecie {
  name: string;
  url: string;
}
