import styled from "@emotion/styled";

import { api } from "../api/pokemonAPI";
const { useGetAllPokemonQuery } = api;

function PokemonList() {
  const { data, isLoading, isError, isSuccess } = useGetAllPokemonQuery();

  const handleClick = name => {
    console.log(name);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading pokemon list</div>;
  }

  if (isSuccess) {
    return (
      <Ul>
        {data.results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <button onClick={() => handleClick(pokemon.name)}>{pokemon.name}</button>
          </li>
        ))}
      </Ul>
    );
  }
}

export default PokemonList;

const Ul = styled.ul`
  list-style-type: none;
`;
