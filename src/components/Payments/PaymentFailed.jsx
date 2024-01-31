import React from 'react'
import { Container, Heading, VStack, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const PaymentFailed = () => {
    return (
        <Container h="90vh">
            <VStack justifyContent={'center'} height={'full'} spacing={'4'}>
                <RiErrorWarningFill size={"5rem"} />
                <Heading textTransform={'uppercase'}> Payment Failed </Heading>
                <Link to={'/subscribe'}>
                    <Button variant={"ghost"}>
                        Try Again
                    </Button>
                </Link>
                <Heading size={'xs'}>
                    Reference:Dgcfghj
                </Heading>
            </VStack>
        </Container>
    )
}
export default PaymentFailed