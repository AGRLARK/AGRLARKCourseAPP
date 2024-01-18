import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();

    console.log("Params token: ", params.token);
    return (
        <>
            <Container py={'16'} h={'95vh'}>
                <form >
                    <Heading children="Forget Password" my='16' textTransform={'uppercase'} textAlign={['center', 'left']} />
                    <VStack>
                        <Input id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter New password'
                            type='password' focusBorderColor='yellow.400' required />

                        <Button type='submit' w={'full'} colorScheme='yellow' >Reset Password </Button>
                    </VStack>
                </form>
            </Container>
        </>
    )
}

export default ResetPassword