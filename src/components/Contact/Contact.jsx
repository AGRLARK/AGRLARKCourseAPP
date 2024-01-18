import React, { useState } from 'react'
import { Container, VStack, Heading, Box, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');


    return (
        <>
            <Container h={'95vh'}>
                <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
                    <Heading children="Contact Us" />
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
                            <FormLabel htmlFor='message' children="Message " />
                            <Textarea id='msg' value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Your Message....'
                                type='text' focusBorderColor='yellow.400' required />
                        </Box>
                        <Button my={'2'} colorScheme='yellow' type='submit'>
                            Send Mail
                        </Button>

                        <Box my={'2'}>
                            Request for a course {' '}
                            <Link to="/request" >
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

export default Contact