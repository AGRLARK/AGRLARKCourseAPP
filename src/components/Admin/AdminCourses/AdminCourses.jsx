import React, { useState, useEffect } from 'react'
import { Grid, Box, Heading, Table, TableContainer, TableCaption, Thead, Th, Tbody, Tr, Td, HStack, Button, Image, useDisclosure, useToast } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { courseService } from '../../../services/courseService';

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const toast = useToast();
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await courseService.getAllCourses();
                if (response.success) {
                    setCourses(response.courses);
                }
            } catch (error) {
                toast({
                    title: 'Error',
                    description: 'Failed to fetch courses',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [toast]);

    const courseDetailHandler = (course) => {
        setSelectedCourse(course);
        onOpen();
    };

    const deleteHandler = async (courseId) => {
        try {
            const response = await courseService.deleteCourse(courseId);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Course deleted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                // Refresh courses list
                const coursesResponse = await courseService.getAllCourses();
                if (coursesResponse.success) {
                    setCourses(coursesResponse.courses);
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to delete course',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const deleteLectureBtnHandler = async (courseId, lectureId) => {
        try {
            const response = await courseService.deleteLecture(courseId, lectureId);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Lecture deleted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                // Refresh courses list
                const coursesResponse = await courseService.getAllCourses();
                if (coursesResponse.success) {
                    setCourses(coursesResponse.courses);
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to delete lecture',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const addLectureHandler = async (e, courseId, title, description, video) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('video', video);

            const response = await courseService.addLectures(courseId, formData);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Lecture added successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                onClose();
                // Refresh courses list
                const coursesResponse = await courseService.getAllCourses();
                if (coursesResponse.success) {
                    setCourses(coursesResponse.courses);
                }
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to add lecture',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };


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
                            {loading ? (
                                <Tr>
                                    <Td colSpan={8} textAlign="center">Loading...</Td>
                                </Tr>
                            ) : courses.length > 0 ? (
                                courses.map((item) => (
                                    <Row key={item._id} item={item} courseDetailHandler={courseDetailHandler} deleteHandler={deleteHandler} />
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={8} textAlign="center">No courses found</Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>

                </TableContainer>
                <CourseModal isOpen={isOpen} onClose={onClose} deleteHandler={deleteHandler} addLectureHandler={addLectureHandler} id={selectedCourse?._id} courseTitle={selectedCourse?.title} />
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
                <Image src={item.poster?.url} boxSize="50px" objectFit="cover" />
            </Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>

            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => courseDetailHandler(item)} variant={'outline'} color={'purple.500'}>View Lecture</Button>
                    <Button color={'purple.600'} onClick={() => deleteHandler(item._id)}>
                        <RiDeleteBin7Fill />
                    </Button>

                </HStack>
            </Td>
        </Tr>
    )
}