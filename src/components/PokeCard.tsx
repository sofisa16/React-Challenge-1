import * as React from "react";
import { PokemonData } from "../types";

const PokeCard: React.FunctionComponent<PokemonData> = (props: PokemonData) => {
  const {
    name,
    sprites: { front_default },
    sprites: { front_shiny },
    video
  } = props;

  return (
    <div className="layout">
      <h1>{name}</h1>
      <div>
        <img src={front_default} alt={`Front of ${name}`} />
      </div>
      <div>
        <img src={front_shiny} alt={`Front shiny of ${name}`} />
      </div>
      <div>
        <a href={video}>{video}</a>
      </div>
    </div>
  );
};

export default PokeCard;
