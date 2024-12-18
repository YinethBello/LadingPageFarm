import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Divider,
    UnorderedList,
    ListItem,

} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const Footer = ({isMobile}) => {
    const amarillo = "#31a252"
    const naranja = "#ff6a00"
    return (
        <Flex
            w={"100%"}
            h={"auto"}
            gap={10}
            justify={"space-around"}
            bg={amarillo}
            color={"white"}
            pt={10}
            pb={10}
            pl={5}
            pr={5}
            
        >
            {/* Navegacion */}
            <Box w={"33%"}>
                <Box gap={3} display={"flex"} alignItems={"center"}>
                    <Divider borderColor={"red"} w={"10%"} />
                    <Heading size={isMobile ? "xs" : "md"}>Navegación</Heading>
                </Box>
                <Box>
                    <UnorderedList styleType="'- '">
                        <ListItem>Inicio</ListItem>
                        <ListItem>Sobre Nosotros</ListItem>
                        <ListItem>Fincas</ListItem>
                        <ListItem>Cotización</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            {/* Sucursales */}
            <Box w={"33%"}>
                <Box gap={3} display={"flex"} alignItems={"center"}>
                    <Divider borderColor={"red"} w={"10%"} />
                    <Heading size={isMobile ? "xs" : "md"}>Sucursales</Heading>
                </Box>
                <Box>
                    <Flex gap={2}>
                        <FaLocationDot />
                        <Heading size={isMobile ? "xs" : "md"}>Bogotá (COL)</Heading>
                    </Flex>
                    <br />
                    <Text color={"black"}>Calle 70 # 27 B 85</Text>
                </Box>
            </Box>
            {/* Redes sociales */}
            <Box w={"33%"} >
                <Box gap={3} display={"flex"} alignItems={"center"}>
                    <Divider borderColor={"red"} w={"10%"} />
                    <Heading size={isMobile ? "xs" : "md"}>Redes sociales</Heading>
                </Box>
                <Box>
                    <Text>Encuentranos en:</Text>
                    <Flex gap={2}>
                        <FaFacebook size={20}/>
                        <GrInstagram size={20}/>
                        <FaWhatsapp size={20}/>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}

export default Footer;