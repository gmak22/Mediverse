import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Plans from '../Components/Service/Plans';

export const Services = () => {
    return (
        <Box mt={10} mb={10}>
            <Text fontSize="4xl" textAlign="center" color="#191D88" fontWeight="600">Our Services</Text>
            <Flex justifyContent="center" mt={6}>
                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#c0b099"
                >
                    <Box bg="#f5f1eb" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/9732/9732548.png"
                            alt="Dental Care"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Dental Care
                        </Text>
                        <Text mt={2}>Providing comprehensive dental services.</Text>
                        <Button mt={2} bg='#c0b099'>Know More</Button>
                    </Box>
                </Box>

                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#bae2d5"
                >
                    <Box bg="#e4f1f0" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/4848/4848971.png"
                            alt="Dental Care"
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Cardiology
                        </Text>
                        <Text mt={2}>Specialized care for heart-related issues.</Text>
                        <Button mt={2} bg="#bae2d5">Know More</Button>
                    </Box>
                </Box>

                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#b5c4eb"
                >
                    <Box bg="#e3e9f6" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/1546/1546120.png"
                            alt="Dental Care"
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Allergic Issue
                        </Text>
                        <Text mt={2}>Specialized care for allergic reactions.</Text>
                        <Button mt={2} bg="#b5c4eb">Know More</Button>
                    </Box>
                </Box>
            </Flex>


            <Flex justifyContent="center" mt={8} mb={8}>
                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#b5c4eb"
                >
                    <Box bg="#e3e9f6" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2824/2824834.png"
                            alt="Eye Care"
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Eye Care
                        </Text>
                        <Text mt={2}>Offering advanced eye care treatments.</Text>
                        <Button mt={2} bg="#b5c4eb">Know More</Button>
                    </Box>
                </Box>

                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#c0b099"
                >
                    <Box bg="#f5f1eb" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2491/2491314.png"
                            alt="Eye Care"
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Neurology
                        </Text>
                        <Text mt={2}>Advanced treatments for neurological disorders.</Text>
                        <Button mt={2} bg="#c0b099">Know More</Button>
                    </Box>
                </Box>

                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={2}
                    textAlign="center"
                    maxW="250px"
                    width="100%"
                    shadow="md"
                    m={4}
                    bg="#bae2d5"
                >
                    <Box bg="#e4f1f0" p={3} borderRadius="lg">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/3979/3979089.png"
                            alt="Eye Care"
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                        <Text mt={4} fontSize="xl" fontWeight="bold">
                            Orthopedic
                        </Text>
                        <Text mt={2}>Expertise in orthopaedic care and surgeries.</Text>
                        <Button mt={2} bg="#bae2d5">Know More</Button>
                    </Box>
                </Box>
            </Flex>

            <Plans />
        </Box>
    );
};

export default Services;
