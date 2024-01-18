import React, { useState } from 'react'
import { Container, VStack, Heading, Box, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');


    return (
        <>
            <Container h={'95vh'}>
                <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
                    <Heading children="Request New Course" />
                    <form style={{ width: "100%" }}>
                        <Box >
                            <FormLabel htmlFor='name' children="Name" />
                            <Input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='abc'
                                type='text' focusBorderColor='yellow.400' required />
                        </Box>
                        <Box >
                            <FormLabel htmlFor='email' children="Email Address" />
                            <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'
                                type='email' focusBorderColor='yellow.400' required />
                        </Box>
                        <Box >
                            <FormLabel htmlFor='message' children="Course " />
                            <Textarea id='course' value={course} onChange={(e) => setCourse(e.target.value)} placeholder='Explain the Course....'
                                type='text' focusBorderColor='yellow.400' required />
                        </Box>
                        <Button my={'2'} colorScheme='yellow' type='submit'>
                            Send Mail
                        </Button>

                        <Box my={'2'}>
                            See Available courses {' '}
                            <Link to="/courses" >
                                <Button variant={'link'}>
                                    Click Here
                                </Button>
                            </Link>
                        </Box>

                    </form>
                </VStack>

            </Container>
        </>
    )
}

export default Request