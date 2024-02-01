import React from 'react'
import { Grid, Box, Text, Heading, Stack, HStack, Progress } from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png'
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';


const Dashboard = () => {
    // {  /*DataBox Component */ }
    const DataBox = ({ title, qty, qtyPercentage, profit }) => {
        return (
            <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} p={8} borderRadius={'lg'}>
                <Text children={title} />
                <HStack spacing={6} >
                    <Text fontSize={'2xl'} fontFamily={'bold'} children={qty} />
                    <HStack>
                        <Text children={`${qtyPercentage}%`} />
                        {
                            profit ? <RiArrowUpLine color='green' /> :
                                <RiArrowDownLine color='red' />
                        }
                    </HStack>
                </HStack>
                <Text opacity={0.6} children="Since last Month" />
            </Box>
        )
    }

    // {/*Bar Component */ }
    const Bar = ({ title, value, profit }) => (
        <Box py={4} px={['0', '20']}>

            <Heading children={title} size={'sm'} mb={2} />
            <HStack w="full" alignItems={'center'}>
                <Text children={profit ? `${value}%` : `-${value}%`} />

                <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />

                <Text children={`${value > 100 ? value : 100}%`} />

            </HStack>

        </Box>

    )

    return (
        <Grid css={{ cursor: `url(${cursor}),default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box >
                <Text textAlign={'center'} opacity={0.5} children={`Last Change was on  ${String(new Date()).split('G')[0]}`} />

                <Heading children="Dashboard" ml={['0', '10vh ']} mb={'16'} textAlign={['center', 'left']} />

                <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
                    <DataBox title="Views" qty={123} qtyPercentage={30} profit={true} />
                    <DataBox title="Users" qty={23} qtyPercentage={28} profit={true} />
                    <DataBox title="Subscription" qty={15} qtyPercentage={20} profit={false} />

                </Stack>
                <Box m={['0', '16']} borderRadius={'lg'} p={['0', '16']} mt={['4', '16']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
                    <Heading textAlign={['center', 'left']} size={'md'} children='Views Graph' pt={['8', '0']} ml={['0', '16']} />
                    {/*Line Graph Here */}
                    <LineChart />
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']} >
                    <Box p={4}>

                        <Heading
                            children="Progress bar"
                            textAlign={['center', 'left']}
                            size={'md'}
                            my={'8'}
                            ml={['0', '16']}
                        />
                        <Box>
                            <Bar title={'Views'} profit={true} value="30" />
                            <Bar title={'Users'} profit={true} value="28" />
                            <Bar title={'Subscription'} profit={false} value="20" />
                        </Box>
                    </Box>
                    <Box p={['0', '16']} boxSizing='border-box' py={4}>
                        <Heading children='Users' textAlign={'center'} size={'md'} mb={4} />
                        {/* Doughnut Graph */}
                        <DoughnutChart />
                    </Box>

                </Grid>
            </Box>

            <Sidebar />

        </Grid>
    )
}

export default Dashboard