import React, { useState } from 'react'
import { Container, VStack, Heading, FormLabel, Input, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'2'}>
        <Heading children={'Welcome to AGRLARK App'} />
        <form style={{ width: "100%" }}>
          <Box >
            <FormLabel htmlFor='email' children="Email Address" />
            <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'
              type='email' focusBorderColor='yellow.400' required />
          </Box>
          <Box>
            <FormLabel htmlFor='password' children="Password" />
            <Input id='password' value={passwd} onChange={(e) => setPasswd(e.target.value)} placeholder='Enter Password'
              type='password' focusBorderColor='yellow.400' required />
          </Box>
          <Box my={'2'}>
            <Link to="/forgetpassword" >
              <Button fontSize={'sm'} variant='link'>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my={'2'} colorScheme='yellow' type='submit'>
            Login
          </Button>
          <Box my='2'>
            New User? <Link to='/register' ><Button colorScheme='yellow' variant={'link'}>Sign Up</Button>{' '}here</Link>
          </Box>
        </form>
      </VStack>

    </Container>
  )
}

export default Login