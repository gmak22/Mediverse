import { Heading, Image, Box, Spacer, HStack, Text, Flex, Icon } from "@chakra-ui/react";
import { FaEye, FaBullseye, FaGem } from "react-icons/fa";
import { WhyUS } from "../Components/WhyUs.jsx";

export const About = () => {
    return (
        <Box mt={10} mb={10}>
            <Text fontSize="4xl" color="#191D88" fontWeight="600" mb={10} textAlign="center">About Us</Text>
            <Flex w="70%" p={4}
                bg="#CCEEBC"
                margin="auto"
                justify="center"
                align="center"
                mt={15} mb={10}
                borderRadius="xl">
                <Image
                    src="https://img.freepik.com/free-photo/male-doctor-examining-patient_1170-2156.jpg"
                    alt="Random Image"
                    w={300} height={450}
                    borderRadius="xl"
                />
                <Spacer />
                <Box ml={8}>
                    <Box mb={6} width={500}>
                        <HStack spacing={2} mb={2}>
                            <Icon as={FaEye} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Vision
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Offering solutions and products that are verifiably effective - that
                            is our vision. Our vision always pushes us to develop and offer high
                            quality solutions and products which can be proven to be effective
                            and efficient in their application.
                        </Text>
                    </Box>

                    <Box mb={6}>
                        <HStack spacing={2} mb={2}>
                            <Icon as={FaBullseye} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Mission
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Our mission is to always improve the quality of life and the quality of work for all our clients and patients with our work and our solutions. Safety and success of therapies are always our focus.
                        </Text>
                    </Box>

                    <Box>
                        <HStack spacing={2} mb={2}>
                            <Icon as={FaGem} boxSize={6} />
                            <Heading as="h1" fontSize="2xl">
                                Our Values
                            </Heading>
                        </HStack>
                        <Text fontSize="lg">
                            Clarity, trust, loyalty, pride and respect - these are our values.
                            They have accompanied us since our beginning and will continue to do
                            so in the future. They are the constants which shape our work and our
                            behavior.
                        </Text>
                    </Box>
                </Box>
            </Flex>

            <Box mb={20}>
                <Text fontSize="4xl" color="#191D88" fontWeight="600" mb={10} textAlign="center">Why Choose Us</Text>
                <WhyUS />
            </Box>
        </Box>

    )
}
