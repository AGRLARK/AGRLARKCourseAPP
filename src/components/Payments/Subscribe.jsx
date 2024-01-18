import React from 'react'
import { Container, Heading, VStack, Box, Text, Button } from '@chakra-ui/react';

const Subscribe = () => {
    return (
        <>
            <Container h={'90vh'} padding={'16'}>
                <Heading children="Welcome" my={'8'} textAlign={'center'} />

                <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
                    <Box bg={'yellow.400'} p={4} style={{ borderRadius: "8px 8px 0 0 " }}>
                        <Text color={'black'} children="Pro Prack - ₹199" />
                    </Box>
                    <Box p={4}>
                        <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
                            <Text children="Join Pro Pack and Access all content." />
                            <Heading size={'md'} children=" ₹199 Only " />
                        </VStack>

                        <Button my={'8'} w={'full'} colorScheme='yellow'>
                            Buy Now
                        </Button>
                        <Box bg={'blackAlpha.600'} p={4} css={{ borderRadius: "0 0 8px 8px" }}>
                            <Heading color={'white'} textTransform={'uppercase'} size={'sm'} children=" 100% refund on Cancellation " />
                            <Text fontSize={'xs'} color={'white'} children="*Terms and Conditons Apply" />
                        </Box>

                    </Box>

                </VStack>

            </Container>
        </>
    )
}

export default Subscribe