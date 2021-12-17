import { 
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container
} from '@chakra-ui/react';
import Hero from '../react.png';

function Header() {

    return (
            <Container maxW='6xl'>

                <Stack
                    py={{ base: 15, md: 20 }}
                    spacing={{ base: 8, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'>

                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                            bgClip="text">
                            ReactJS Projects
                        </Heading>

                        <Text color={'gray.500'}>
                            Snippy is a rich coding snippets app that lets you create your own
                            code snippets, categorize them, and even sync them in the cloud so
                            you can use them anywhere. All that is free!
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'cyan'}
                                bg={'cyan.400'}
                                _hover={{ bg: 'cyan.500' }}>
                                Get started
                            </Button>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}>
                                How It Works
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}>
                        <Box
                            position={'relative'}
                            height={'350px'}
                            width={'full'}
                            overflow={'hidden'}>
                            <Image
                                alt={'Hero Image'}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={Hero}
                            />
                        </Box>
                    </Flex>



                </Stack>

            </Container>
    )
}

export default Header
