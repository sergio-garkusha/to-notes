import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: build => ({
    getAllPokemon: build.query({ query: () => "pokemon" }),
    getPokemonByName: build.query({ query: (name: string) => `pokemon/${name}` }),
  }),
});
