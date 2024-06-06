import React, { useState } from 'react';
import './Dashboard.css';
import { useQuery, gql } from '@apollo/client';
import { TextField, Grid, Card, CardContent, Typography, CardMedia, CircularProgress, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const GET_POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      image
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('number');
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const filteredPokemons = data.pokemons
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.number - b.number;
    });

  const paginatedPokemons = filteredPokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>Content Management Dashboard</Typography>
      <TextField
        label="Search Pokémon"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortType}
          onChange={e => setSortType(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {paginatedPokemons.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <Card>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="140"
                image={pokemon.image}
                title={pokemon.name}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  #{pokemon.number}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredPokemons.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
}

export default Dashboard;
