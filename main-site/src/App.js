import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  VStack,
  Flex,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const { colorMode, toggleColorMode } = useColorMode("dark");
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml={{ base: 0, sm: 8 }} size="md" fontWeight="semibold" color="cyan.400">React Projects</Heading>
          <Spacer></Spacer>
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
          <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
          <IconButton ml={2} mr={{ base: 0, sm: 8 }} icon={<FaGithub />} isRound="true"></IconButton>
          <IconButton ml={2} mr={{ base: 0, sm: 8 }} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
        </Flex>

      </VStack>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
