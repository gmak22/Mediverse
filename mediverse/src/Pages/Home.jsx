import {
    Box, Button, Flex, Image, Spacer, Text,
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton, FormControl,
    FormLabel, Input, Center, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import TestimonialCard from "../Components/Testimonials";
import Doctors from "../Components/Doctors";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleSubmit = () => {
        toast({
            title: 'Appointment Booked',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        navigate('/')
    }
    const backgroundImageUrl = "url(https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg)";
    return (
        <Box>
            <Center>
                <Flex py={12} w="80%" mb={12} mt={12}>
                    <Box flex={1}>
                        <Image src="https://i.ibb.co/XpPR13K/image-med-cleanup.png" h="100%" width="400px" />
                    </Box>
                    <Box flex={1} pr={4}>
                        <Text fontSize="4xl" fontWeight="800">Find Out A Doctor</Text>
                        <Text fontSize="4xl" fontWeight="800">More Experienced</Text>
                        <Text fontSize="4xl" fontWeight="800" mb={6}>And More Easy</Text>
                        <Text mb={4}>A GREAT PLACE TO RECEIVE CARE.</Text>
                        <Text mb={6}>BEST OUTCOME FOR EVERY PATIENT EVERY TIME.</Text>
                        <Flex w="70%">
                            <Button colorScheme="purple">Get In Touch</Button>
                            <Spacer />
                            <Button colorScheme="green">See more</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Center>

            <Flex
                bg={backgroundImageUrl}
                bgSize="cover"
                bgPosition="center"
                py={12}
                rounded="md"
                shadow="md"
                color="white"
                w="80%"
                margin="auto"
                mb={12}
            >
                <Box flex={1} direc ml={5}>
                    <Text fontSize="4xl" fontWeight="bold" mb={4} color="blue">
                        Short Story about <br /> Mediverse Clinic
                    </Text>
                    <Flex flexDirection="column">
                        <div>
                            <Text fontSize="2xl" fontWeight="semibold" color="#445069">
                                Founded with a profound vision, Mediverse was <br /> established as a response to the growing need <br /> for personalized and compassionate healthcare. <br /> Our journey began when a group of dedicated <br /> medical professionals came together with a <br /> shared belief that healthcare should blend <br /> expertise with empathy.
                            </Text>
                        </div>
                        <Flex mt={5} mb={5}>
                            <Box mr={5} textAlign="center" bg="#0E2954" h={58} w={150} borderRadius="lg">
                                <Text fontSize="xl" fontWeight="bold" >1000+</Text>
                                <Text>Happy Patients</Text>
                            </Box>
                            <Box textAlign="center" bg="#1F6E8C" h={58} w={150} borderRadius="lg">
                                <Text fontSize="xl" fontWeight="bold">65+</Text>
                                <Text>Expert Doctors</Text>
                            </Box>
                        </Flex>
                        <Flex>
                            <Box mr={5} textAlign="center" bg="#576CBC" h={58} w={150} borderRadius="lg">
                                <Text fontSize="xl" fontWeight="bold">93%</Text>
                                <Text>Satisfaction</Text>
                            </Box>
                            <Box textAlign="center" bg="#50577A" h={58} w={150} borderRadius="lg">
                                <Text fontSize="xl" fontWeight="bold">24/7</Text>
                                <Text>Available</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

            <Box mb={12}>
                <Flex flexDirection="column" textAlign="center">
                    <Text fontSize="5xl" color="blue">Leading The Way In</Text>
                    <Text fontSize="5xl" mb={5} color="blue">Medical Excellence</Text>
                    <Text fontSize="2xl">Not just better healthcare, but a better healthcare experience. Passionate about medicine.</Text>
                    <Text fontSize="2xl">Compassionate About People. Serving all people through exemplary health care,</Text>
                    <Text fontSize="2xl" mb={5}>education research and community outreach.</Text>
                    <Flex margin="auto">
                        <Button colorScheme="blue" mr={3} onClick={openModal}>Get Free Consultation</Button>
                        <Button bg="#1b3c74" color="white" _hover={{ bg: "#1b3c74" }}>Call on +912345678</Button>
                    </Flex>
                </Flex>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Book Appointment</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleSubmit}>
                                <FormControl mb={3}>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        type="text"
                                    />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input
                                        type="text"
                                    />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel>Date</FormLabel>
                                    <Input
                                        type="date"
                                    />
                                </FormControl>
                                <FormControl mb={3}>
                                    <FormLabel>Time</FormLabel>
                                    <Input
                                        type="time"
                                    />
                                </FormControl>
                            </form>
                        </ModalBody>
                        <ModalFooter gap={2}>
                            <Button onClick={closeModal}>Cancel</Button>
                            <Button type="submit" colorScheme="blue">
                                    Book
                                </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

            <Box textAlign="center" mb={12}>
                <Text fontSize="4xl" mb={8}>Our Doctors</Text>
                <Doctors />
            </Box>

            <Box mb={12}>
                <Box textAlign="center" mb={8}>
                    <Text fontSize="4xl">Testimonials</Text>
                </Box>
                <Box>
                    <TestimonialCard />
                </Box>
            </Box>
        </Box>
    );
}
