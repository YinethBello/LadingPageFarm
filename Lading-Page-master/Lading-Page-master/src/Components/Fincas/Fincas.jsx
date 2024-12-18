import React, { forwardRef } from "react";
import {
    Box,
    Heading,
    Flex,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    ButtonGroup,
    Button,
    Stack,
    Divider,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import fincaOne from "../../assets/finca1.jpg";
import fincaTwo from "../../assets/finca2.jpg";
import fincaThree from "../../assets/finca3.jpg";

const Fincas = forwardRef(({ isMobile }, ref) => {
    const blanco = "#ffffe5"
    const morado = "#6b456c"
    const verdeOscuro = "#31a252"
    const verdeClaro = "#dffda7"

    const fincas = [
        {
            image: fincaOne,
            title: "Finca Sinaloa",
            description: "vereda planas a una hora de la vereda cristalinas hectáreas 927 todas con papeles al día colinda con el rio planas y caños veraneros a 15 minutos de las redes eléctricas y de la via principal  sabana natural casi toda pastos solo tiene como 5 hectáreas corral en madera casa en material perforado para la casa",
        },
        {
            image: fincaTwo,
            title: "La hacienda BUENA VISTA",
            description: " está  ubicada en el municipio de agua de dios Cundinamarca vereda Leticia vía agua de dios ricaurte por los Manueles a 5 km de agua de dios y a  15 km de Girardot.  tiene 160 hectáreas  a  40 millones cada una, se vende a puerta cerrada,  cuenta con dos tractores un Jhon Deere 5320 y un Ford 5000 recién reparado , toda la maquinaria para la recolección del heno enfardadora, cortadora y hiladora marcas Jhon Deree, un arado de disco nuevo , arado de  cincel, rastra, pulidor, abonadora, 1 retrospin,  1caballoneador, 2 guadadañas una b45 y otra b530 , 4  fumigadoras  dos  de espalda y  2 de motor a gasolina, un equipo de soldadura , un compresor una cortadora de pasto, una motosierra nueva grande y tuberia en aluminio y PVC para riego ,   batería de comederos y dos bombas perkins succión de riego de 6 cilindros en combustible diésel, una motobomba con encendido eléctrico de 3 pulgadas de 13 caballos de fuerza nueva , el 80% de la finca tiene riego por hidrantes de riego por bombeo , báscula nueva ,  mesa de cirugía,  corral en concreto, 25 posetas de agua, 32 potreros con saleros ,  10 hectáreas en producción pasto  anglenton para heno dos bodegas, 2 casas para agregados, 1 casa para los dueños, 1 caballo.cuenta con planos de potreros y planos de sistema de riego , estudio y planos de futura represa y planos topograficos"
        },
        {
            image: fincaThree,
            title: "Finca en Puerto gaitán meta",
            description: "Finca de 1.000 hectáreas en Puerto Gaitán Meta, a 10 minutos del casco urbano, 100% plana, 100% mecanizable, 100% pasto, 100% cercada, 100% con agua, 100% con energía, 100% con casa, 100% con corrales, 100% con bodegas, 100% con establo, 100% con tanques de almacenamiento de agua, 100% con lagunas, 100% con potreros, 100% con comederos, 100% con bebederos, 100% con cercas eléctricas, 100% con vías internas, 100% con riego, 100% con drenaje, 100% con sistema de seguridad, 100% con sistema de cámaras, 100% con sistema de alarma, 100% con sistema de monitoreo, 100% con sistema de control, 100% con sistema de rastreo, 100% con sistema de vigilancia, 100% con sistema de acceso, 100% con sistema de iluminación, 100% con sistema de sonido, 100% con sistema de comunicación, 100% con sistema de información, 100% con sistema de entretenimiento, 100% con sistema de automatización, 100% con sistema de domótica, 100% con sistema de seguridad, 100% con sistema de vigilancia, 100% con sistema de monitoreo, 100% con sistema de control, 100% con sistema de rastreo, 100% con sistema de acceso, 100% con sistema de iluminación, 100% con sistema de sonido, 100% con sistema de comunicación, 100% con sistema de información, 100% con sistema de entretenimiento, 100% con sistema de automatización, 100% con sistema de domótica, 100% con sistema de seguridad, 100% con sistema de vigilancia, 100% con sistema de monitoreo, 100% con sistema de control, 100% con sistema de rastreo, 100% con sistema de acceso, 100% con sistema de iluminación, 100% con sistema de sonido,"

        }
    ]

    const [expanded, setExpanded] = React.useState(Array(fincas.length).fill(false));

    const toggleExpand = (index) => {
        setExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <Box
            w={"100%"}
            h={"auto"}
            p={50}
            bg={blanco}
            ref={ref}
        >
            <Heading>Fincas Destacadas</Heading>
            <br />
            <Flex justify={"space-around"} flexDir={isMobile && "column"} gap={isMobile && 5}>
                {fincas.map((finca, index) => (
                    <Card key={index} maxW='sm' bg={verdeClaro} zIndex={0}>
                        <CardBody>
                            <Image
                                src={finca.image}
                                alt={finca.title}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' color={verdeOscuro}>{finca.title}</Heading>
                                <Text>
                                    {expanded[index] ? finca.description : truncateText(finca.description, 50)}
                                </Text>
                                <Button variant='link' colorScheme='blue' onClick={() => toggleExpand(index)}>
                                    {expanded[index] ? "Ver menos" : "Ver más"}
                                </Button>
                                <Text color='blue.600' fontSize='2xl'>
                                    $4M la hectarea
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='whatsapp' gap={2}
                                    onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=573145505495"}
                                >
                                    Escribenos
                                    <FaWhatsapp />
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
})

export default Fincas;