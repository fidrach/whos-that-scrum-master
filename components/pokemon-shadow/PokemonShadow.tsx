import { Box, Button, styled } from '@mui/material';
import { useState } from 'react';

import { getRandomNumber } from '../../utility/getRandomNumber';
import { POKEMON_SHADOW_PATHS } from '../../utility/pokemon';

const randomizePokemon = () =>
    POKEMON_SHADOW_PATHS[getRandomNumber(POKEMON_SHADOW_PATHS.length - 1)];

export const PokemonShadow = () => {
    const [pokemon, setPokemon] = useState(randomizePokemon());

    const randomize = () => {
        setPokemon(randomizePokemon());
    };

    return (
        <Box display="flex" flexDirection="column">
            <Button onClick={randomize}>Randomize</Button>
            <Image src={pokemon} />
        </Box>
    );
};

const Image = styled('img')({
    height: 500,
    width: 500,
});
