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
            <ShadowContainer>
                <Background src="/shadow_background.png" />
                <Shadow src={pokemon} />
            </ShadowContainer>
        </Box>
    );
};

const ShadowContainer = styled(Box)({
    position: 'relative',
    height: 300,
    width: 300,
});

const Shadow = styled('img')({
    height: 300,
    position: 'absolute',
    top: 0,
});

const Background = styled('img')({
    height: '100%',
});
