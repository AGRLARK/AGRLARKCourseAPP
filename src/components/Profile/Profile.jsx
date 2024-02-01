import React, { useState } from 'react'
import { Container, Heading, Stack, VStack, Avatar, HStack, Button, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from './../Auth/Register';

const Profile = () => {
    const user = {
        name: "Anurag",
        email: "anuragg@gmail.com",
        CreatedAt: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: undefined
        },
        playlist: [{
            course: "web development",
            poster: 'https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }]
    }

    const removeFromPlaylisthandler = id => {
        console.log(id);
    };

    const changeImgSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log(image);
    }

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Container minH={"95vh"} maxW={'container.lg'} py={8}>
            <Heading children="Profile" m={8} textTransform={'uppercase'} />

            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button colorScheme='yellow' variant={'ghost'} onClick={onOpen}>
                        Change Photo

                    </Button>
                </VStack>
                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text fontWeight={'bold'}> Name</Text>
                        <Text> {user.name}</Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight={'bold'}> Email</Text>
                        <Text> {user.email}</Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight={'bold'}> CreatedAt</Text>
                        <Text> {user.CreatedAt.split('T')[0]}</Text>
                    </HStack>
                    {
                        user.role !== 'admin' &&
                        <HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {
                                user.subscription.status === 'active' ? (
                                    <Button variant='unstyled'>
                                        Cancel Subscription
                                    </Button>
                                ) : (
                                    <Link to={'/subscribe'}>
                                        <Button colorScheme='yellow'>
                                            Subscribe
                                        </Button>
                                    </Link>
                                )
                            }
                        </HStack>
                    }
                    <Stack
                        direction={['column', 'row']}
                        alignItems={'center'}
                    >
                        <Link to={'/updateprofile'}>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to={'/changepassword'}>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>

            </Stack>
            <Heading size="md" my={8} children="PlayList" />

            {
                user.playlist.length > 0 && (
                    <Stack direction={['column', 'row']}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        p={4}
                    >
                        {
                            user.playlist.map((element) => (
                                <VStack w={48} m={2} key={element.course}>
                                    <Image boxSize={'full'} objectFit={'contain'} src={element.poster} />
                                    <HStack>
                                        <Link to={`/course/${element.course}`}>
                                            <Button variant={'ghost'} colorScheme='yellow'>
                                                Watch Now
                                            </Button>
                                        </Link>
                                        <Button onClick={() => removeFromPlaylisthandler(element.course)}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }
            <ChangePhotoBox
                changeImgSubmitHandler={changeImgSubmitHandler}
                isOpen={isOpen}
                onClose={onClose}
            />
        </Container>
    )
}

export default Profile

function ChangePhotoBox({ isOpen, onClose, changeImgSubmitHandler }) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');


    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const closeHandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter="blur(10px)" />
            <ModalContent >
                <ModalHeader>
                    Change Photo

                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImgSubmitHandler(e, image)}>
                            <VStack spacing={8}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
                                }
                                <Input type='file' css={{ '&::file-selector-button': fileUploadCss }} onChange={changeImage} />
                                <Button w={'full'} colorScheme='yellow' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={closeHandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}