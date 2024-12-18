import React from "react";
import {
    Box,
    Flex,
    Heading,
    Button,
    Text,
    Image,
    Link,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = ({ isMobile, scrollToSection, homeRef, aboutRef, cotizacionRef, fincasRef }) => {
    const verdeOscuro = "#31a252"
    const blanco = "#ffffe5"
    const verdeNeutro = "#6ecf42"

    return (
        <Flex
            w={"100%"}
            h={isMobile ? "12vh" : "10vh"}
            justify={"space-around"}
            bg={blanco}
            p={3}
            pos={"fixed"}
            zIndex={1}
        >
            <Flex flexDir={isMobile && "column"} gap={isMobile ? 0 : 5} w={isMobile && "35%"}>

                <Flex gap={isMobile ? 2 : 5}>
                    <Box w={isMobile ? "40%" : "100%"} h={"100%"}>
                        <Image
                            src={logo}
                            w={"100%"}
                            h={"100%"}
                        />
                    </Box>
                    <Heading color={verdeOscuro} size={isMobile ? "xs" : "lg"} display={isMobile && "none"}>Fincalandia</Heading>
                </Flex>
                <Flex gap={3} alignItems={"center"} color={verdeNeutro} fontSize={isMobile && 13}>
                    <FaWhatsapp />
                    <Link
                        href={"https://api.whatsapp.com/send?phone=573145505495"}
                        isExternal
                    >
                        +57 314 550 5495
                    </Link>
                </Flex>
                <Box>
                    <Button colorScheme="green" variant={"outline"} size={isMobile ? "xs" : "md"}
                        onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=573145505495"}
                    >
                        Publica tu finca
                    </Button>
                </Box>
            </Flex>
            <Flex gap={isMobile ? 3 : 10} alignItems={"center"} fontSize={isMobile && 12} w={isMobile && "65%"}>
                <Link onClick={() => scrollToSection(homeRef)}>Inicio</Link>
                <Link onClick={() => scrollToSection(aboutRef)}>Sobre nosotros</Link>
                <Link onClick={() => scrollToSection(fincasRef)}>Fincas</Link>
                <Link onClick={() => scrollToSection(cotizacionRef)}>Cotizacion</Link>
            </Flex>
        </Flex>
    );
}

export default Navbar;