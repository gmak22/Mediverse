import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
    Button,
    useToast,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContextProvider';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor="gray"
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

function Plans() {
    const navigate = useNavigate()
    const { loggedInUser } = useAuth();
    const toast = useToast();

    const handleClick = () => {
        if (loggedInUser) {
            navigate('/checkout')
        }
        else {
            toast({
                title: 'Please log in first',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }

    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" color="#191D88" fontWeight="600" mb={10}>
                    Healthcare Plans For You
                </Heading>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                borderRadius="xl"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper borderRadius="xl">
                    <Box py={4} px={12} bg="#f06b01" borderTopRadius="xl" color="white">
                        <Text fontWeight="500" fontSize="2xl">
                            Basic Plan
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                79
                            </Text>
                            <Text fontSize="3xl">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg="#FFECAF"
                        py={4}
                        borderBottomRadius={'xl'}
                        fontWeight="bold">
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                10+ Treatments
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                100% Private and Confidential
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="orange" onClick={handleClick}>
                                Buy Now
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            transform="translateX(-50%)">
                            <Text
                                textTransform="uppercase"
                                bg="red"
                                px={3}
                                py={1}
                                color="white"
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Most Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12} bg="#004b85" borderTopRadius="xl" color="white">
                            <Text fontWeight="500" fontSize="2xl">
                                Standard Plan
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>
                                <Text fontSize="3xl">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg="#CEE6F3"
                            py={4}
                            borderBottomRadius={'xl'}
                            fontWeight="bold">
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    15+ Treatments
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    100% Private and Confidential
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Consult Top Doctors 24x7
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="blue" onClick={handleClick}>
                                    Buy Now
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12} bg="#303030" borderTopRadius="xl" color="white">
                        <Text fontWeight="500" fontSize="2xl">
                            Premium Plan
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                349
                            </Text>
                            <Text fontSize="3xl">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg="#D8D9DA"
                        py={4}
                        borderBottomRadius={'xl'}
                        fontWeight="bold">
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                15+ Treatments
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                100% Private and Confidential
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Consult Top Doctors 24x7
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Laboratory Test & Checkup
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="gray" onClick={handleClick}>
                                Buy Now
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}

export default Plans;
