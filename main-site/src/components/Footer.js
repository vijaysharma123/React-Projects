import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <HStack>
                        <Text>© 2021 React Projects. Designed By</Text>
                        <Text as={'a'} href='' color={'blue.500'} fontWeight={500}>Jigar Sable</Text>
                    </HStack>


                    <Stack direction={'row'} spacing={6}>

                        <IconButton isRound='true' as={'a'} href={''}>
                            <FaGithub />
                        </IconButton>
                        <IconButton isRound='true' as={'a'} href={''}>
                            <FaLinkedin />
                        </IconButton>
                        <IconButton isRound='true' as={'a'} href={''}>
                            <FaInstagram />
                        </IconButton>

                    </Stack>

                </Container>
            </Box>
        </>
    )
}

export default Footer
