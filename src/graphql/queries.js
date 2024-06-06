import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  {
    pokemons(first: 10) {
      id
      number
      name
      image
    }
  }
`;
