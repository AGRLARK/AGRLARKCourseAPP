import React, { useState } from 'react'
import { Container, VStack, Heading, FormLabel, Input, Box, Button, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';
import { authService } from '../../services/authService';

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
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', passwd);
            formData.append('avatar', image);

            const response = await authService.register(formData);
            
            if (response.success) {
                toast({
                    title: 'Registration Successful',
                    description: response.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/login');
            }
        } catch (error) {
            toast({
                title: 'Registration Failed',
                description: error.response?.data?.message || 'Something went wrong',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container h={'90vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'2'}>
                <Heading textTransform={'uppercase'} children={'Registeration'} />
                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
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
                    <Button my={'2'} colorScheme='yellow' type='submit' isLoading={loading} loadingText='Signing up...'>
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