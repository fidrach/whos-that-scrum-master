import { Box, Button, Fade, Avatar as MUAvatar, styled } from '@mui/material';
import { useState } from 'react';

import { getRandomNumber } from '../../utility/getRandomNumber';
import { POKEMON_SHADOW_PATHS } from '../../utility/pokemon';

const randomizePokemon = () =>
    POKEMON_SHADOW_PATHS[getRandomNumber(POKEMON_SHADOW_PATHS.length - 1)];

type Props = {
    revealUrl: string;
    onNext?: () => void;
    onPrevious?: () => void;
};

export const PokemonShadow: React.VFC<Props> = ({
    revealUrl,
    onNext,
    onPrevious,
}) => {
    const [pokemon, setPokemon] = useState(randomizePokemon());

    const [revealed, setRevealed] = useState(false);
    const [revealedDelayed, setRevealedDelayed] = useState(false);

    const randomize = () => {
        let index = randomizePokemon();

        while (index === pokemon) {
            index = randomizePokemon();
        }

        setPokemon(index);
    };

    const showShadow = () => {
        setRevealedDelayed(false);
        setTimeout(() => {
            setRevealed(false);
        }, 500);
    };

    const showRevealPicture = () => {
        setRevealed(true);
        setTimeout(() => {
            setRevealedDelayed(true);
        }, 500);
    };

    const onPreviousAction = async () => {
        randomize();
        showShadow();
        onPrevious && onPrevious();
    };

    const onNextAction = async () => {
        randomize();
        showShadow();
        onNext && onNext();
    };

    const revealShadow = () => {
        showRevealPicture();
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start">
            <ShadowContainer onClick={revealShadow}>
                <Background src="/shadow_background.png" />
                <Fade in={!revealed} timeout={1000}>
                    <Shadow src={pokemon} />
                </Fade>
                <Fade appear={true} in={revealedDelayed} timeout={1000}>
                    <Avatar src={revealUrl} />
                </Fade>
            </ShadowContainer>

            {revealed && (
                <Box display="flex" justifyContent="center">
                    <Button onClick={onPreviousAction}>Previous</Button>
                    <Button onClick={onNextAction}>Next</Button>
                </Box>
            )}
        </Box>
    );
};

const ShadowContainer = styled(Box)({
    position: 'relative',
    height: 300,
    width: 300,
    '&: hover': {
        cursor: 'pointer',
    },
});

const Shadow = styled('img')({
    height: 300,
    position: 'absolute',
    top: 0,
});

const Avatar = styled(MUAvatar)({
    height: 250,
    width: 250,
    position: 'absolute',
    top: 25,
    left: 25,
});

const Background = styled('img')({
    height: '100%',
});
