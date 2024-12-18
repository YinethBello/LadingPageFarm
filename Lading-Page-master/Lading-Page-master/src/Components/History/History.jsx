import React, { forwardRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react';
import history from '../../assets/history.jpg';

const History = forwardRef(({ isMobile }, ref) => {
    const blanco = "#ffffe5"
    const morado = "#6b456c"
    const verdeOscuro = "#31a252"
    const verdeClaro = "#dffda7"

    return (
        <Box
            w={"100%"}
            h={"93vh"}
            bgImage={history}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            p={50}
            ref={ref}
        >
            <Box
                w={isMobile ? "100%" : "50%"}
                bg={verdeOscuro}
                p={5}
                color={blanco}
                borderRadius={"lg"}
                display={"flex"}
                flexDir={"column"}
                gap={2}
                fontSize={isMobile && 13}
            >
                <Heading>Nuestra Historia</Heading>
                <br />
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque corporis illum, eius autem consectetur reiciendis adipisci vel qui nesciunt voluptatibus accusamus amet aut dignissimos rem a natus. Explicabo, beatae.
                </Text>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque corporis illum, eius autem consectetur reiciendis adipisci vel qui nesciunt voluptatibus accusamus amet aut dignissimos rem a natus. Explicabo, beatae.
                </Text>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque corporis illum, eius autem consectetur reiciendis adipisci vel qui nesciunt voluptatibus accusamus amet aut dignissimos rem a natus. Explicabo, beatae.
                </Text>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque corporis illum, eius autem consectetur reiciendis adipisci vel qui nesciunt voluptatibus accusamus amet aut dignissimos rem a natus. Explicabo, beatae.
                </Text>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque corporis illum, eius autem consectetur reiciendis adipisci vel qui nesciunt voluptatibus accusamus amet aut dignissimos rem a natus. Explicabo, beatae.
                </Text>
            </Box>

        </Box>
    );
})

export default History;