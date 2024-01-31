import React from 'react'
import { Container, Heading, VStack, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
    return (
        <Container h="90vh">
            <VStack justifyContent={'center'} height={'full'} spacing={'4'}>
                <RiErrorWarningFill size={"5rem"} />
                <Heading > Page Not Found </Heading>
                <Link to={'/'}>
                    <Button variant={"ghost"}>
                        Go to Home
                    </Button>
                </Link>
                <Heading size={'xs'}>
                    Reference:Dgcfghj
                </Heading>
            </VStack>
        </Container>
    )
}

export default NotFound