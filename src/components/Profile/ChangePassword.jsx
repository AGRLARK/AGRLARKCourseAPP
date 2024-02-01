import React, { useState } from 'react'
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    return (
        <>
            <Container py="16" minH={'90vh'}>
                <form>
                    <Heading my={16} textAlign={['center', 'left']} textTransform={'uppercase'}>
                        Change Password
                    </Heading>
                    <VStack spacing={8}>
                        <Input
                            required
                            id='password'
                            value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)}
                            placeholder='Enter Old Password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />

                        <Input
                            required
                            id='password'
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            placeholder='Enter New Password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />

                        <Button type='submit' w={'full'} colorScheme='yellow'>
                            Submit
                        </Button>

                    </VStack>

                </form>

            </Container>
        </>
    )
}

export default ChangePassword