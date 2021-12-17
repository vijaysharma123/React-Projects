import React from 'react'

export default function Sam() {
    return (
        <HStack>
        {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle> */}

        <Flex w="100%" direction={isNotSmallScreen ? "row" : "column"}
         p={isNotSmallScreen ? "32" : 0}
         >

            <Box mt={isNotSmallScreen ? "0" : 16} alignSelf="flex-start">
                <Text fontSize="5xl" fontWeight="semibold">Hello Buddy</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Hello Buddy</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>Lorem ipsu adipisicing elit. Reprehenderit neque enim expedita atque aspernatur, inventore ea dolores velit. Quod, velit.</Text>
                <Button mt={8} colorScheme="blue">Hire Me</Button>
            </Box>

            <Box bg="tomato" h={5}>
                
            </Box>

            <Image alignSelf="flex-end" mt={isNotSmallScreen ? "0" : "12"}
            mb={isNotSmallScreen ? "0" : "12"} borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="200px"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHCpwxNakumPQ/profile-displayphoto-shrink_200_200/0/1616927123254?e=1645056000&v=beta&t=LuwHig3ZXCEP8iAmuK8X_U0qW_xiwBM-wwg2efCX1-k"></Image>
            

        </Flex>
    </HStack>
    )
}
