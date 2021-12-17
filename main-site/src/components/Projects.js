import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    HStack,
    Flex,
    Box,
    Container,
    Grid,
    useColorMode
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const Projects = () => {


    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Container maxW="6xl">
            <Heading
                textAlign={'center'}
                fontSize={{ base: '3xl', sm: '5xl' }}
                my={4}
                fontWeight={600}
                color={'cyan.500'}
            >
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: '5%',
                        position: 'absolute',
                        bottom: -1.5,
                        left: 0,
                        bg: 'gray.100',
                        zIndex: -1,
                    }}>
                    Basic Projects
                </Text>
            </Heading>

            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8}
                py={5}>

                {
                    Array(12).fill('').map((el) => (
                        <Box
                            w={'full'}
                            position={'relative'}
                            overflow={'hidden'}
                            rounded={'md'}
                            boxShadow={'sm'}
                            transition={'.2s ease'}
                            bg={isDark ? 'gray.900' : 'gray.100'}
                            _hover={{
                                transform: 'translateY(-4px)',
                                boxShadow: 'lg'
                            }}>

                            <Image
                                h={'14rem'}
                                w={'full'}
                                src={
                                    'https://react-projects.netlify.app/static/39590c042a8fbb92bc541f8d9d3dfb64/2cdab/copy.webp'
                                }
                                objectFit={'cover'}
                            />
                            <Heading
                                fontSize={'lg'}
                                fontWeight={600}
                                p={4}
                                color={'blue.800'}
                                backgroundColor={'whiteAlpha.500'}
                                w={'full'}
                                position={'absolute'}
                                top={0}>
                                Project Name
                            </Heading>
                            <HStack
                                spacing={4}
                                my={4}
                                mx={4}
                            >

                                <Button
                                    w={'full'}
                                    colorScheme={'red'}
                                >
                                    Preview
                                </Button>
                                <Button
                                    w={'full'}
                                    colorScheme={'blue'}
                                >
                                    Code
                                </Button>
                            </HStack>
                        </Box>
                    ))
                }


            </Grid>

        </Container>
    )
}

export default Projects
