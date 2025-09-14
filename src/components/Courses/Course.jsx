import React, { useState, useEffect } from 'react'
import { Container, Heading, Input, HStack, Button, Text,Stack ,VStack,Image,Link, useToast} from '@chakra-ui/react'
import { courseService } from '../../services/courseService';
import { authService } from '../../services/authService';


const Courses = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount}) => (
  <VStack className='course' alignItems={['center','flex-start']}>
    <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
    <Heading size={"sm"} textAlign={['center','left']} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} children={title}/>
    <Text  noOfLines={2} children={description} />  
    <HStack>
      <Text fontWeight={'bold'} transform={'uppercase'} children="Creator"/>
      <Text fontFamily={'body'}  textTransform={'uppercase'} children={creator}/>
    </HStack>
    <Heading textAlign={'center'} size={'xs'} children={`Lectures - ${lectureCount}`} />
    <Heading  size={'xs'} children={`Viewers - ${views}`} />
    <Stack direction={['column','row']} alignItems={'center'}>
      <Link to={`/course/${id}`}>
        <Button colorScheme={'yellow'}>Watch Now</Button>
      </Link>
      <Button variant={'ghost'} colorScheme='yellow' onClick={()=>{
        addToPlaylistHandler(id)}
        }>Add to Playlist
      </Button>

    </Stack>
  </VStack>
)

const Course = () => {
  const [keyword, setKeyword] = useState("");
  const [category,setCategory] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await courseService.getAllCourses();
        if (response.success) {
          setCourses(response.courses);
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch courses',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [toast]);

  const addToPlaylistHandler = async (courseId) => {
    try {
      const response = await authService.addToPlaylist(courseId);
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Course added to playlist',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to add course to playlist',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const Categories = [
    "Web Development", "Game Development", "APP Development", "Data Science", "Artificial Intelligence", "Data Science & Algorithms",
    "Software Development", "Cloud Computing", "Cybersecurity", "Mobile Development", "Blockchain", "Programming", "Machine Learning", "Database", "Networking", "System Administration", "Design", "Digital Marketing"
  ];

  // Filter courses based on keyword and category
  const filteredCourses = courses.filter(course => {
    const matchesKeyword = course.title.toLowerCase().includes(keyword.toLowerCase()) ||
                          course.description.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory = !category || course.category === category;
    return matchesKeyword && matchesCategory;
  });
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY="8">
      <Heading children="All Courses" m={"8"}></Heading>
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search a Course.." type="text" focusBorderColor='yellow.400' />
      <HStack overflowX={'auto'} paddingY={'10'} css={{'&::-webkit-scrollbar':{
        display:'none'
      }}}>
        {Categories.map((item,index)=>(
          <Button key={index} onClick={()=>setCategory(item)}  minW={'60'} >
          <Text children={item}/>
        </Button>
        ))} 
      </HStack>

      {loading ? (
        <Heading children="Loading..." />
      ) : (
        <Stack direction={['column','row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Courses
                key={course._id}
                views={course.views}
                title={course.title}
                imageSrc={course.poster?.url}
                id={course._id}
                addToPlaylistHandler={() => addToPlaylistHandler(course._id)}
                creator={course.createdBy}
                description={course.description}
                lectureCount={course.numOfVideos}
              />
            ))
          ) : (
            <Heading children="No courses found" />
          )}
        </Stack>
      )}
    </Container>

  )
}

export default Course
