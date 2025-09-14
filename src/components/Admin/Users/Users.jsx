import React, { useState, useEffect } from 'react'
import { Grid, Box, Heading, Table, TableContainer, TableCaption, Thead, Th, Tbody, Tr, Td, HStack, Button, useToast } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { adminService } from '../../../services/adminService';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await adminService.getAllUsers();
                if (response.success) {
                    setUsers(response.users);
                }
            } catch (error) {
                toast({
                    title: 'Error',
                    description: 'Failed to fetch users',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [toast]);

    const updateHandler = async (userId) => {
        try {
            const newRole = users.find(user => user._id === userId)?.role === 'admin' ? 'user' : 'admin';
            const response = await adminService.updateUserRole(userId, newRole);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'User role updated successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                // Refresh users list
                const usersResponse = await adminService.getAllUsers();
                if (usersResponse.success) {
                    setUsers(usersResponse.users);
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to update user role',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const deleteHandler = async (userId) => {
        try {
            const response = await adminService.deleteUser(userId);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'User deleted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                // Refresh users list
                const usersResponse = await adminService.getAllUsers();
                if (usersResponse.success) {
                    setUsers(usersResponse.users);
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to delete user',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

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
                            {loading ? (
                                <Tr>
                                    <Td colSpan={6} textAlign="center">Loading...</Td>
                                </Tr>
                            ) : users.length > 0 ? (
                                users.map((item) => (
                                    <Row key={item._id} item={item} updateHandler={updateHandler} deleteHandler={deleteHandler} />
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={6} textAlign="center">No users found</Td>
                                </Tr>
                            )}
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
            <Td>{item.subscription?.status === "active" ? "Active" : "Not Active"}</Td>
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