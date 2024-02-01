import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container py="16" minH={'90vh'}>
            <form>
                <Heading my={16} textAlign={['center', 'left']} textTransform={'uppercase'}>
                    Update Profile
                </Heading>
                <VStack spacing={8}>
                    <Input
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='abc'
                        type='text'
                        focusBorderColor='yellow.500'
                    />
                    <Input
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='xyz@gmail.com'
                        type='email'
                        focusBorderColor='yellow.500'
                    />

                    <Button type='submit' w={'full'} colorScheme='yellow'>
                        Update
                    </Button>

                </VStack>

            </form>

        </Container>
    )
}

export default UpdateProfile