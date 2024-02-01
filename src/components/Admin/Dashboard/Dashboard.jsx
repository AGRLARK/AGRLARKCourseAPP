import React from 'react'
import { Grid, Box } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';

const Dashboard = () => {
    return (
        <Grid css={{ cursor: `url(${cursor}),default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box>

            </Box>

            <Sidebar />

        </Grid>
    )
}

export default Dashboard