import React from 'react'
import { Grid, Box, Heading, Table, TableContainer, TableCaption } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
const Users = () => {
    return (
        <Grid css={{ cursor: `url(${cursor}),default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} children="All Users" my={16} textAlign={['center', 'left']} />
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'} >
                        <TableCaption>
                            All Available
                        </TableCaption>
                    </Table>

                </TableContainer>
            </Box>

            <Sidebar />

        </Grid>
    )
}

export default Users