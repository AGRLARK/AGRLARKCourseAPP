import React, { useState, useEffect } from 'react'
import { Grid, Box, Heading, Text, useToast } from '@chakra-ui/react'
import VideosIntro from '../../assets/videos/BASS_DROP_INTRO.mp4';
import { VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { courseService } from '../../services/courseService';


const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const [course, setCourse] = useState(null);
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const toast = useToast();

    useEffect(() => {
        const fetchCourseLectures = async () => {
            try {
                const response = await courseService.getCourseLectures(id);
                if (response.success) {
                    setCourse(response.course);
                    setLectures(response.course.lectures);
                }
            } catch (error) {
                toast({
                    title: 'Error',
                    description: 'Failed to fetch course lectures',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCourseLectures();
        }
    }, [id, toast]);


    if (loading) {
        return <Heading children="Loading..." />;
    }

    if (!course || lectures.length === 0) {
        return <Heading children="Course not found" />;
    }

    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>

            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={lectures[lectureNumber]?.video?.url || VideosIntro}
                ></video>
                <Heading m={'4'} children={`#${lectureNumber + 1} ${lectures[lectureNumber]?.title}`} />
                <Heading m={'4'} children="Description " />

                <Text m={4} children={lectures[lectureNumber]?.description} />
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