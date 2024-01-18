import React from 'react'
import { Container, Heading, Stack, VStack, Avatar, Text, HStack, Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/BASS_DROP_INTRO.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TermsAndConditions } from '../../assets/docs/TermsAndConditin';


const Founders = () => {
    return (
        <Stack direction={['column', 'row']} spacing={['4', '16']}>
            <VStack >
                <Avatar src='https://avatars.githubusercontent.com/u/133891539?v=4' boxSize={['40', '48']} />
                <Text children="Founder" opacity={'0.9'} />
            </VStack>
            <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
                <Heading children="Anurag Gupta" size={['md', 'xl']} />
                <Text alignItems={['center', 'left']} children="Hi, I am a Full Stack Developer! and a Proficient in MERN STACK " />
            </VStack>
        </Stack>
    )
}

const VideoPlayer = () => (
    <Box>
        <video
            autoPlay
            muted
            loop
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
        ></video>
    </Box>
);

const TandC = ({ termsandconditions }) => (
    <>
        <Box>
            <Heading children="Terms & Conditions" size={'md'} textAlign={['center', 'left']} my={'4'} />
        </Box>
        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text fontFamily={'heading'} letterSpacing={'widest'} textAlign={['center', 'left']}>{termsandconditions}</Text>
            <Heading my={'4'} size={'xs'} children="Refund Only Applicable for Cancellation within 7 days" />
        </Box>
    </>
);

const About = () => {
    return (
        <>
            <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
                <Heading children="About Us" m={4} textAlign={['center', 'left']} />

                <Founders />
                <Stack m='8' direction={['column ', 'row']} alignItems={'center'}>
                    <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}> We are a video Streaming Platform with some premium courses available only for Premium users. </Text>
                    <Link to={'/subscribe'} variant="ghost" colorScheme="yellow"> <Button>Check Out our Plan</Button></Link>
                </Stack>

                <VideoPlayer />

                <TandC termsandconditions={TermsAndConditions} />

                <HStack my={4} p={4}>
                    <RiSecurePaymentFill />
                    <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children="Payment is secured by RazorPay" />
                </HStack>
            </Container>
        </>
    )
}

export default About