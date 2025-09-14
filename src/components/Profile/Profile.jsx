import React, { useState, useEffect } from 'react'
import { Container, Heading, Stack, VStack, Avatar, HStack, Button, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, useDisclosure, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from './../Auth/Register';
import { authService } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const toast = useToast();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { user, loading, isAuthenticated, refreshUser } = useAuth();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            window.location.href = '/login';
        }
    }, [loading, isAuthenticated]);

    const removeFromPlaylisthandler = async (courseId) => {
        try {
            const response = await authService.removeFromPlaylist(courseId);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Course removed from playlist',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                // Refresh profile data
                await refreshUser();
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to remove course',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const changeImgSubmitHandler = async (e) => {
        e.preventDefault();
        if (!image) return;

        try {
            const formData = new FormData();
            formData.append('avatar', image);

            const response = await authService.updateProfilePicture(formData);
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Profile picture updated successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                onClose();
                // Refresh profile data
                await refreshUser();
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Failed to update profile picture',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    };

    if (loading) {
        return <Container minH={"95vh"} maxW={'container.lg'} py={8}>
            <Heading children="Loading..." />
        </Container>;
    }

    if (!user) {
        return <Container minH={"95vh"} maxW={'container.lg'} py={8}>
            <Heading children="User not found" />
        </Container>;
    }

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
                    <Avatar boxSize={'48'} src={user.avatar?.url} />
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
                        <Text> {user.createdAt?.split('T')[0]}</Text>
                    </HStack>
                    {/* {
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
                    } */}
                    {user.role !== 'admin' && (
                        <HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {user.subscription?.status === 'active' ? (
                                <Button variant="unstyled">
                                    Cancel Subscription
                                </Button>
                            ) : (
                                <Link to="/subscribe">
                                    <Button colorScheme="yellow">
                                        Subscribe
                                    </Button>
                                </Link>
                            )}
                        </HStack>
                    )}

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
                        <form onSubmit={changeImgSubmitHandler}>
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