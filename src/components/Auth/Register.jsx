import React, { useState } from 'react'
import { Container, VStack, Heading, FormLabel, Input, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';

export const fileUploadCss = {
    cursor: "pointer", marginLeft: "-5px",
    width: "110%", border: "none", height: "100%",
    color: "#34fh3", backgroundColor: 'white'
};

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }
    return (
        <Container h={'90vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'2'}>
                <Heading textTransform={'uppercase'} children={'Registeration'} />
                <form style={{ width: "100%" }}>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Avatar src={imagePrev} size={'2xl'} />
                    </Box>
                    <Box >
                        <FormLabel htmlFor='name' children="Name " />
                        <Input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='abc'
                            type='text' focusBorderColor='yellow.400' required />
                    </Box>
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
                    <Box >
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
                        <Input accept='image/*' id='avatar' type='file' focusBorderColor='yellow.400' css={fileUploadStyle} onChange={changeImageHandler} required />
                    </Box>
                    <Button my={'2'} colorScheme='yellow' type='submit'>
                        Sign Up
                    </Button>
                    <Box my={'2'}>
                        Already Sign Up?{' '}
                        <Link to="/login" >
                            <Button variant={'link'}>
                                Login
                            </Button>
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Register;