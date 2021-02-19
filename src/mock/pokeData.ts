export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  video: string;
}

export const mockPokemonData: PokemonData = {
  name: "Charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
  },
  video:
    "https://www.youtube.com/watch?v=evvO5Gcl-mo&ab_channel=TheOfficialPok%C3%A9monYouTubechannel"
};
