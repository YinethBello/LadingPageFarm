import React, {forwardRef} from "react";
import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import campo from "../../assets/campo.jpg";


const Home = forwardRef(({isMobile}, ref) => {
    const amarillo = "#6b456c"
    const blanco = "#ffffe5"

    return (
        <Box
            w={"100%"}
            h={"90vh"}
            bgImage={campo}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            // filter={"brightness(50%)"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            pos={"relative"}
            zIndex={-1}
            pl={isMobile ? 10 : 150}
            top={"10vh"}
            ref={ref}
        >
            <Box>
                <Heading
                    color={blanco}
                    fontSize={"6xl"}
                    textAlign={"start"}
                    zIndex={1}
                    textShadow={"2px 2px 4px #000000"}
                >
                    Consigue tu <Text color={amarillo}>Finca</Text>Soñada
                </Heading>
                <Text
                fontWeight={"bold"}
                color={blanco}
                fontSize={"xl"}
                textAlign={"start"}
                zIndex={1}
                textShadow={"2px 2px 4px #000000"}
                >Fincas rústicas para comprar, arrendar e invertir</Text>
            </Box>

        </Box>
    );
})

export default Home;