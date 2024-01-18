import React from 'react';
import { Box, Stack, VStack, Heading, HStack } from '@chakra-ui/react';
import { TiSocialInstagramCircular, TiSocialYoutubeCircular } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'

const Footer = () => {
  return (
    <Box padding={4} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children={"All Rights Reserved! "} color={"white"} />
          <Heading fontFamily={'body'} size={'sm'} children={"@Agrlark "} color={"yellow"} />
        </VStack>
        <HStack spacing={['2', '10']} justifyContent={'center'} fontSize={50}>
          <a href="https://www.youtube.com/channel/UCTh3mKy9YI0ZJBgzuJ556YQ" target='blank'>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/anurag_gupta_tcsc" target='blank'>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://www.github.com/agrlark" target='blank'>
            <DiGithub />
          </a>

        </HStack>
      </Stack>

    </Box>
  )
}

export default Footer