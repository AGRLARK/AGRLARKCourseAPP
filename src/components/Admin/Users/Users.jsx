import React from 'react'
import { Grid, Box, Heading, Table, TableContainer, TableCaption, Thead, Th, Tbody, Tr, Td, HStack, Button } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
const Users = () => {
    const users = [
        {
            _id: "d32sdsesafg2q",
            name: "Anurag gupta",
            email: "ag@gmail.com",
            role: "admin",
            subscription: "active"
        }
    ]
    const updateHandler = userId => {
        console.log(userId);
    }

    const deleteHandler = userId => {
        console.log(userId);
    }

    return (
        <Grid css={{ cursor: `url(${cursor}),default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} children="All Users" my={16} textAlign={['center', 'left']} />
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'} >
                        <TableCaption>
                            All Available users in Database

                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric >Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users.map((item) => (
                                    <Row key={item._id} item={item} updateHandler={updateHandler} deleteHandler={deleteHandler} />
                                )
                                )
                            }
                        </Tbody>
                    </Table>

                </TableContainer>
            </Box>

            <Sidebar />

        </Grid>
    )
}

export default Users

function Row({ item, updateHandler, deleteHandler }) {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => updateHandler(item._id)} variant={'outline'} color={'purple.500'}>Change Role</Button>
                    <Button color={'purple.600'} onClick={() => deleteHandler(item._id)}>
                        <RiDeleteBin7Fill />
                    </Button>

                </HStack>
            </Td>
        </Tr>
    )
}