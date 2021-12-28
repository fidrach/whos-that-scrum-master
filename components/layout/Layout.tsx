import { Home } from '@mui/icons-material';
import { Container, IconButton, Toolbar, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { PATHS } from '../../utility/paths';

export const Layout: React.FC = ({ children }) => {
    const router = useRouter();

    const goHome = () => {
        router.push(PATHS.Home);
    };

    return (
        <>
            <Header>
                <Toolbar>
                    <IconButton onClick={goHome}>
                        <Home />
                    </IconButton>
                </Toolbar>
            </Header>
            <Container>{children}</Container>
        </>
    );
};

const Header = styled('div')({
    position: 'sticky',
    top: 0,
});
