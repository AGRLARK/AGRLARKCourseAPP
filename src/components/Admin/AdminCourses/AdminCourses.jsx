import React from 'react'
import { Grid, Box, Heading, Table, TableContainer, TableCaption, Thead, Th, Tbody, Tr, Td, HStack, Button, Image, useDisclosure } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
    const courses = [
        {
            _id: "d32sdsesafg2q",
            poster: {
                url: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            title: "React Js Course",
            category: " Web Development",
            createdBy: "AGRLARK",
            views: 123,
            numOfVideos: 213
        }
    ]
    const { isOpen, onClose, onOpen } = useDisclosure();

    const courseDetailHandler = userId => {
        onOpen();
    }

    const deleteHandler = userId => {
        console.log(userId);
    }

    const deleteLectureBtnHandler = (courseId, lectureId) => {
        console.log(courseId);
        console.log(lectureId);
    }

    const addLectureHandler = (e, courseId, title, description, video) => {
        e.preventDefault();
    }


    return (
        <Grid css={{ cursor: `url(${cursor}),default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['8', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} children="All Users" my={16} textAlign={['center', 'left']} />
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'} >
                        <TableCaption>
                            All Available courses in Database

                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Poster</Th>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Creator</Th>
                                <Th isNumeric >Views</Th>
                                <Th isNumeric >Lectures</Th>
                                <Th isNumeric >Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map((item) => (
                                    <Row key={item._id} item={item} courseDetailHandler={courseDetailHandler} deleteLectureBtnHandler={deleteLectureBtnHandler} />
                                )
                                )
                            }
                        </Tbody>
                    </Table>

                </TableContainer>
                <CourseModal isOpen={isOpen} onClose={onClose} deleteHandler={deleteHandler} addLectureHandler={addLectureHandler} id={'ad2sadf'} courseTitle="React Course" />
            </Box>

            <Sidebar />

        </Grid>
    )
}

export default AdminCourses

function Row({ item, courseDetailHandler, deleteHandler }) {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td>
                <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>

            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => courseDetailHandler(item._id)} variant={'outline'} color={'purple.500'}>View Lecture</Button>
                    <Button color={'purple.600'} onClick={() => deleteHandler(item._id)}>
                        <RiDeleteBin7Fill />
                    </Button>

                </HStack>
            </Td>
        </Tr>
    )
}