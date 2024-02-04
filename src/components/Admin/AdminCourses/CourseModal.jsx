import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Grid, Box, Heading, Stack, Text, VStack, Input, ModalFooter } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from './../../Auth/Register';

const CourseModal = ({ isOpen, onClose, id, deleteLectureBtnHandler, courseTitle, addLectureHandler, courseId, lectures = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }

    const handleClose = () => {
        setTitle("");
        setDescription('');
        setVideo('');
        setVideoPrev('');
        onClose();
    }

    return (
        <>
            <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='outside' >
                <ModalOverlay />
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader children={courseTitle} />
                        <ModalCloseButton onClick={onClose} />
                        <ModalBody p={16}>
                            <Grid templateColumns={['1fr', '3fr 1fr']}>
                                <Box px={['0', '16']}>
                                    <Box my={'5'}>
                                        <Heading children={`#${id}`} size={'sm'} opacity={0.4} />

                                    </Box>
                                    <Heading children='lectures' size={'lg'} />

                                    {
                                        lectures.map((item, index) =>
                                        (
                                            <VideoCard
                                                key={index}
                                                title="React Js"
                                                description="This is the Embark of learning in ReactJs cover Basics in this lecture"
                                                num={index + 1}
                                                lectureId="afjjj1223jsj"
                                                courseId={id}
                                                deleteLectureBtnHandler={deleteLectureBtnHandler}
                                                addLectureHandler={addLectureHandler}
                                            />
                                        ))
                                    }

                                </Box>
                                <Box>
                                    <form onSubmit={(e) => addLectureHandler(e, id, title, description, video)}>
                                        <VStack spacing={4}>
                                            <Heading children="Add Lecture" size={'md'} textTransform={'uppercase'} />
                                            <Input focusBorderColor='purple.300' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <Input focusBorderColor='purple.300' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

                                            <Input
                                                accept='video/mp4'
                                                type='file'
                                                focusBorderColor='purple.300'
                                                css={{
                                                    "&::file-selector-button": {
                                                        ...fileUploadCss, color: 'purple'
                                                    }
                                                }}
                                                onChange={changeVideoHandler}
                                                required
                                            />
                                            {
                                                videoPrev && (
                                                    <video controlsList='nodownload' controls src={videoPrev}>
                                                    </video>
                                                )
                                            }

                                            <Button w="full" colorScheme='purple.300' type='submit'  >Upload</Button>
                                        </VStack>
                                    </form>
                                </Box>

                            </Grid>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleClose}>Close</Button>
                        </ModalFooter>

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