export interface Pokemon {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: LanguageOrVersionGroupOrPokemonOrGeneration;
  names?: NamesEntity[] | null;
  effect_entries?: EffectEntriesEntity[] | null;
  effect_changes?: EffectChangesEntity[] | null;
  flavor_text_entries?: FlavorTextEntriesEntity[] | null;
  pokemon?: PokemonEntity[] | null;
  sprites: Sprites;
  types: TypesEntity[];
}

interface LanguageOrVersionGroupOrPokemonOrGeneration {
  name: string;
  url: string;
}

interface NamesEntity {
  name: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
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

interface EffectEntriesEntity {
  effect: string;
  short_effect: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
}

interface EffectChangesEntity {
  version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
  effect_entries?: EffectEntriesEntity1[] | null;
}

interface EffectEntriesEntity1 {
  effect: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
}

interface FlavorTextEntriesEntity {
  flavor_text: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
  version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
}

interface PokemonEntity {
  is_hidden: boolean;
  slot: number;
  pokemon: LanguageOrVersionGroupOrPokemonOrGeneration;
}

interface Other {
  dream_world: DreamWorldOrIcons;
}

interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}

interface TypesEntity {
  slot: number;
  type: TypeSpecie;
}

interface TypeSpecie {
  name: string;
  url: string;
}

interface TypePokemonIndex {
  name: string;
  url: string;
}
