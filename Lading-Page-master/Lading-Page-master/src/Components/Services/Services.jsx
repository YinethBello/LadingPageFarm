import React from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
} from "@chakra-ui/react";
import cardOne from "../../assets/card1.jpg";
import cardTwo from "../../assets/card2.jpg";
import cardThree from "../../assets/card3.jpg";
import cardFour from "../../assets/card4.jpg";

const Services = ({ isMobile }) => {

    const services = [
        {
            image: cardOne,
            title: "Servicio 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            image: cardTwo,
            title: "Servicio 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            image: cardThree,
            title: "Servicio 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            image: cardFour,
            title: "Servicio 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
    ]

    const blanco = "#ffffe5"
    const morado = "#6b456c"
    const verdeOscuro = "#31a252"
    const verdeClaro = "#dffda7"

    return (
        <Flex
            w={"100%"}
            h={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            p={isMobile ? 1 : 50}
            flexDir={"column"}
            bg={blanco}
        >
            <Box w={"100%"}>
                <Heading color={morado}>
                    Mas Servicios
                </Heading>
            </Box>
            <br />
            <Flex
                w={"100%"}
                h={"auto"}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
            >
                {services.map((item, index) => (
                    <Box
                        key={index}
                        w={isMobile ? "45%" : "23%"}
                        bgImage={item.image}
                        bgSize={"cover"}
                        bgPosition={"center"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"lg"}
                        boxShadow={"xl"}
                        zIndex={0}
                        h={400}
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"end"}
                        p={5}
                        m={isMobile ? "2.5%" : "1%"}
                    >
                        <Heading>
                            <Text color={blanco}>{item.title}</Text>
                        </Heading>
                        <Text color={blanco}>{item.description}</Text>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}

export default Services;