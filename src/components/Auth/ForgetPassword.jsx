import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    return (
        <Container py={'16'} h={'95vh'}>
            <form >
                <Heading children="Forget Password" my='16' textTransform={'uppercase'} textAlign={['center', 'left']} />
                <VStack>
                    <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'
                        type='email' focusBorderColor='yellow.400' required />

                    <Button type='submit' w={'full'} colorScheme='yellow' >Send Reset Link </Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ForgetPassword