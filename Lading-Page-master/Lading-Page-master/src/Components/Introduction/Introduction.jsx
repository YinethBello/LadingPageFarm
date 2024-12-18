import React from 'react';
import {
    Box,
    Heading,
    Flex,
    Text,
    Button,
    Image,
} from '@chakra-ui/react';
import introduction from "../../assets/introduction.jpg";
import introductionTwo from "../../assets/introduction2.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Introduction = ({ isMobile }) => {
    const blanco = "#ffffe5"
    const verdeOscuro = "#31a252"
    const morado = "#6b456c"

    return (
        <Flex
            w={"100%"}
            h={isMobile ? 800 : "auto"}
            p={isMobile ? 5 : 100}
            gap={isMobile ? 5 : 10}
            justifyContent={"center"}
            flexDir={isMobile && "column"}
        >
            <Flex
                w={isMobile ? "100%" : "45%"}
                border={"2px solid"}
                borderColor={morado}
                gap={10}
                p={5}
                borderRadius={"md"}
            >
                <Box w={"50%"}>
                    <Heading color={verdeOscuro} size={"lg"}>Explore Fincas</Heading>
                    <br />
                    <Text color={morado}>
                        Encuentra la finca de tus sueños y disfruta de la naturaleza
                    </Text>
                    <br />
                    <Button
                        colorScheme="purple"
                        variant="solid"
                        gap={2}
                        bg={morado}
                        onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=573145505495"}
                    >
                        Contactanos
                        <FaWhatsapp />
                    </Button>
                </Box>
                <Box w={"50%"} borderRadius={"md"}>
                    <Image
                        src={introduction}
                        alt={"introduction"}
                        w={"100%"}
                        h={"100%"}
                        borderRadius={"md"}
                    />
                </Box>
            </Flex>

            <Flex
                w={isMobile ? "100%" : "45%"}
                border={"2px solid"}
                borderColor={morado}
                gap={10}
                p={5}
                borderRadius={"md"}
            >
                <Box w={"50%"}>
                    <Heading color={verdeOscuro} size={"lg"}>Publique su finca</Heading>
                    <br />
                    <Text color={morado}>
                        Publique su finca y llegue a miles de personas interesadas
                    </Text>
                    <br />
                    <Button
                        colorScheme="purple"
                        variant="solid"
                        gap={2}
                        bg={morado}
                        onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=573145505495"}
                    >
                        Contactanos
                        <FaWhatsapp />
                    </Button>
                </Box>
                <Box w={"50%"} borderRadius={"md"}>
                    <Image
                        src={introductionTwo}
                        alt={"introduction"}
                        w={"100%"}
                        h={"100%"}
                        borderRadius={"md"}
                    />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Introduction;