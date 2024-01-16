import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Box,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/Images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiUdemy, SiCoursera } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import VideosIntro from '../../assets/videos/BASS_DROP_INTRO.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text children="Find Valuable Content At Reasonable Price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          ></Image>
        </Stack>
      </div>
      <Box padding={'8'} bg="black.800">
        <Heading
          textAlign="center"
          fontFamily="body"
          color="yellow.400"
          children="OUR BRANDS"
        ></Heading>
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          margin={'4'}
          bg="black.400"
        >
          <CgGoogle />
          <CgYoutube />
          <DiAws />
          <SiUdemy />
          <SiCoursera />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={VideosIntro}
        ></video>
      </div>
    </section>
  );
};

export default Home;
