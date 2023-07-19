import React from 'react'
import { Box } from '@mui/material';
import { data } from '../database/db';
import Character from './Character';
import { Grid } from '@mui/material';

function Characters() {
    return (
        <Box style={{ margin: '10px' }}>
            <Grid container >
                {
                    data.characters.map((value) => (
                        <Grid item>
                            <Character value={value} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Characters;