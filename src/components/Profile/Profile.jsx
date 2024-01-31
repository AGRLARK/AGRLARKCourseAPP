import React from 'react'
import { Container, Heading, Stack, VStack, Avatar, HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
            course: "hsbh",
            poster: "fdgjd"
        }]
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
                    <Avatar boxSize={'48'} />
                    <Button colorScheme='yellow' variant={'ghost'}>
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

                <Heading size="md" my={8} children="PlayList" />

                {
                    user.playlist.length > 0 && (
                        <Stack direction={['column', 'row']}
                            alignItems={'center'}
                        >

                        </Stack>
                    )
                }
            </Stack>
        </Container>
    )
}

export default Profile