import React, { forwardRef } from "react";
import {
    Box,
    Flex,
    Heading,
    Button,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Divider,

} from "@chakra-ui/react";
import cotizacion from "../../assets/cotizacion.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Cotizacion = forwardRef(({ isMobile }, ref) => {
    const morado = "#6b456c"


    return (
        <Box
            w={"100%"}
            h={"auto"}
            p={50}
            bgImage={cotizacion}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            ref={ref}
        >
            <Card size={isMobile ? "md" : "lg"} w={isMobile ? null : "sm"}>
                <CardHeader>
                    <Heading color={morado} size={"lg"}>Cotización</Heading>
                </CardHeader>
                <CardBody>
                    <Divider borderColor={morado} />

                    <Stack mt={5}>
                        <Text>
                            ¿Quieres saber cuánto vale tu finca?
                        </Text>
                        <Text>
                            ¡Nosotros te ayudamos!
                        </Text>

                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='whatsapp' gap={2}
                        onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=573145505495"}
                    >
                        Cotiza aquí
                        <FaWhatsapp />
                    </Button>
                </CardFooter>
            </Card>
        </Box>
    );
})

export default Cotizacion;