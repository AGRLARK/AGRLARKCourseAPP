import React, { useState } from 'react'
import { Container, Heading, Input, HStack, Button, Text,Stack ,VStack,Image,Link} from '@chakra-ui/react'


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
  
  const addToPlaylistHandler = () => {
    console.log("Added to Playlist");
  }

  const Categories = [
    "Web Development", "Game Development", "APP Development", "Data Science", "Artificial Intelligense", "Data Science & Algorithms",
    "Software Development"
  ]
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

      <Stack direction={['column','row']}
      flexWrap={'wrap'}
      justifyContent={['flex-start','space-evenly']}
      alignItems={['center','flex-start']}
      >
        <Courses
        views={23}
        title={'Sample'}
        imageSrc={'https://images.unsplash.com/photo-1704918187702-cc31f0c19280?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        id={'Sample'}
        addToPlaylistHandler={addToPlaylistHandler}
        creator={"Anurag"}
        description={'Sample'}
        lectureCount={22}
        />
      </Stack>
    </Container>

  )
}

export default Course
