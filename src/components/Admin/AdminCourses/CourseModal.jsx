import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Grid, Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({ isOpen, onClose, id, deleteLectureBtnHandler, courseTitle, addLectureHandler, courseId, lectures = [] }) => {


    return (
        <>
            <Modal isOpen={isOpen} size={'full'}>
                <ModalOverlay />
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader children={courseTitle} />
                        <ModalCloseButton />
                        <ModalBody p={16}>
                            <Grid templateColumns={['1fr', '3fr 1fr']}>
                                <Box px={['0', '16']}>
                                    <Box my={'5'}>
                                        <Heading children={`#${id}`} size={'sm'} opacity={0.4} />

                                    </Box>
                                    <Heading children='lectures' size={'lg'} />

                                    <VideoCard
                                        title="React Js"
                                        description="This is the Embark of learning in ReactJs cover Basics in this lecture"
                                        num={1}
                                        lectureId="afjjj1223jsj"
                                        courseId={id}
                                        deleteLectureBtnHandler={deleteLectureBtnHandler}
                                        addLectureHandler={addLectureHandler}
                                    />

                                </Box>

                            </Grid>

                        </ModalBody>

                    </ModalContent>
                </ModalOverlay>

            </Modal>
        </>
    )
}

export default CourseModal

function VideoCard({ title, description, num, lectureId, courseId, deleteHandler }) {
    return (
        <Stack
            direction={['column', 'row']}
            my={8}
            borderRadius={'lg'}
            boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
            justifyContent={['flex-start', 'space-between']}
            p={['4', '8']}

        >
            <Box>
                <Heading size={'sm'} children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>
            <Button color={'purple.600'} onClick={() => deleteHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>

        </Stack>
    )
}