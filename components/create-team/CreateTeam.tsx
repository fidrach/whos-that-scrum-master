import {
    Box,
    Button,
    Card,
    Modal as MUModal,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import { useState } from 'react';

import { useAppDispatch } from '../../redux/store';
import { createTeam } from '../../redux/team';

export const CreateTeam: React.VFC = () => {
    const [name, setName] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useAppDispatch();

    const onSubmit = () => {
        dispatch(createTeam({ name }));
        setName('');
        handleClose();
    };

    return (
        <Box>
            <Box mb={2}>
                <Button onClick={handleOpen}>Create Team</Button>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Card>
                    <Box p={4} display="flex" flexDirection="column">
                        <TextField
                            label="Name"
                            required
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <Box mt={3} display="flex" justifyContent="center">
                            <Button onClick={onSubmit}>Create</Button>
                        </Box>
                    </Box>
                </Card>
            </Modal>
        </Box>
    );
};

const Modal = styled(MUModal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
