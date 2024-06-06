import React, { useState } from 'react';
import './Dashboard.css';
import { useQuery, gql } from '@apollo/client';
import { TextField, Grid, Card, CardContent, Typography, CardMedia, Select, MenuItem, InputLabel, FormControl, Modal, Backdrop, Fade, Alert } from '@material-ui/core';
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

  if (error) {
    return (
      <div className="dashboard">
        <Alert severity="error">Failed to load Pokémon data. Please try again later.</Alert>
      </div>
    );
  }

  const filteredPokemons = data.pokemons
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!typeFilter || pokemon.types.includes(typeFilter)))
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.number - b.number;
    });

  if (filteredPokemons.length === 0) {
    return (
      <div className="dashboard">
        <Typography variant="h6">No Pokémon found</Typography>
      </div>
    );
  }

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
        inputProps={{ 'aria-label': 'search-pokemon' }}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortType}
          onChange={e => setSortType(e.target.value)}
          label="Sort By"
          inputProps={{ 'aria-label': 'sort-by' }}
        >
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="filter-label">Filter by Type</InputLabel>
        <Select
          labelId="filter-label"
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          label="Filter by Type"
          inputProps={{ 'aria-label': 'filter-by-type' }}
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
            <motion.div whileHover={{ scale: 1.1 }} onClick={() => handleOpen(pokemon)} tabIndex={0} role="button" aria-label={`View details of ${pokemon.name}`}>
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
        aria-label="pagination"
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
          aria-labelledby="pokemon-modal-title"
          aria-describedby="pokemon-modal-description"
        >
          <Fade in={!!selectedPokemon}>
            <div className="modal-content">
              <Typography id="pokemon-modal-title" variant="h4" gutterBottom>{selectedPokemon.name}</Typography>
              <Typography id="pokemon-modal-description" variant="body1">Number: {selectedPokemon.number}</Typography>
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
