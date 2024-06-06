import React from 'react';
import './Dashboard.css';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  {
    pokemons(first: 10) {
      id
      number
      name
      image
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="dashboard">
      <h1>Content Management Dashboard</h1>
      <div className="pokemon-list">
        {data.pokemons.map(pokemon => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
