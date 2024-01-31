import React, { useState } from 'react'
import { Grid, Box, Heading, Text } from '@chakra-ui/react'
import VideosIntro from '../../assets/videos/BASS_DROP_INTRO.mp4';
import { VStack } from '@chakra-ui/react';


const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    // const lectureNumber = 0;
    const lectures = [
        {
            _id: 'sdsf',
            title: "sample",
            descriptions: "Sample hbhvbcshb",
            video: {
                url: "fgyui",

            }
        },
        {
            _id: 'sdsf2',
            title: "sample2",
            descriptions: "Sample hbhvbcshb2",
            video: {
                url: "fgyui",

            }
        },
        {
            _id: 'sdsf3',
            title: "sample3",
            descriptions: "Sample hbhvbcshb3",
            video: {
                url: "fgyui",

            }
        },
        {
            _id: 'sdsf4',
            title: "sample4",
            descriptions: "Sample hbhvbcshb",
            video: {
                url: "fgyui",

            }
        },
    ];


    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>

            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={VideosIntro}
                ></video>
                <Heading m={'4'} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m={'4'} children="Description " />

                <Text m={4} children={lectures[lectureNumber].descriptions} />
            </Box>
            <VStack>
                {
                    lectures.map((element, index) => (
                        <button onClick={() => setLectureNumber(index)} key={element._id} style={{ width: "100%", padding: "1rem", textAlign: "center", margin: 0, borderBottom: "1px solid green" }}> <Text noOfLines={1}> #{index + 1} {element.title} </Text> </button>
                    ))
                }
            </VStack>
        </Grid>
    )
}

export default CoursePage