import React, { useState } from 'react';
import './Dashboard.css';
import { useQuery, gql } from '@apollo/client';
import { TextField, Grid, Card, CardContent, Typography, CardMedia, Select, MenuItem, InputLabel, FormControl, Modal, Backdrop, Fade } from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';
import { motion } from 'framer-motion';

const GET_POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      image
      classification
      types
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('number');
  const [typeFilter, setTypeFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const itemsPerPage = 20;

  const handleOpen = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Typography variant="h4" gutterBottom>Loading Pokémon...</Typography>
        <Grid container spacing={3}>
          {Array.from(new Array(itemsPerPage)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <Skeleton variant="rect" width="100%" height={140} />
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  if (error) return <p>Error :(</p>;

  const filteredPokemons = data.pokemons
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!typeFilter || pokemon.types.includes(typeFilter)))
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
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Filter by Type</InputLabel>
        <Select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          label="Filter by Type"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Grass">Grass</MenuItem>
          <MenuItem value="Poison">Poison</MenuItem>
          <MenuItem value="Fire">Fire</MenuItem>
          <MenuItem value="Water">Water</MenuItem>
          {/* Add more types as needed */}
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {paginatedPokemons.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <motion.div whileHover={{ scale: 1.1 }} onClick={() => handleOpen(pokemon)}>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredPokemons.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
      {selectedPokemon && (
        <Modal
          open={!!selectedPokemon}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={!!selectedPokemon}>
            <div className="modal-content">
              <Typography variant="h4" gutterBottom>{selectedPokemon.name}</Typography>
              <Typography variant="body1">Number: {selectedPokemon.number}</Typography>
              <Typography variant="body1">Classification: {selectedPokemon.classification}</Typography>
              <Typography variant="body1">Types: {selectedPokemon.types.join(', ')}</Typography>
              <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
