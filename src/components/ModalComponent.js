import React from 'react';
import { Typography, Modal, Backdrop, Fade } from '@material-ui/core';

const ModalComponent = ({ pokemon, handleClose }) => (
  <Modal
    open={!!pokemon}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    aria-labelledby="pokemon-modal-title"
    aria-describedby="pokemon-modal-description"
  >
    <Fade in={!!pokemon}>
      <div className="modal-content">
        <Typography id="pokemon-modal-title" variant="h4" gutterBottom>{pokemon.name}</Typography>
        <Typography id="pokemon-modal-description" variant="body1">Number: {pokemon.number}</Typography>
        <Typography variant="body1">Classification: {pokemon.classification}</Typography>
        <Typography variant="body1">Types: {pokemon.types.join(', ')}</Typography>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </Fade>
  </Modal>
);

export default ModalComponent;
