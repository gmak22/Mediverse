import { Heading, Box, Text, Flex, Icon, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export const WhyUS = () => {
  const whyChooseUsItems = [
    {
      icon: FaCheckCircle,
      title: "High Quality Services",
      description: "We provide top-notch medical services to ensure the well-being of our patients."
    },
    {
      icon: FaCheckCircle,
      title: "Experienced Team",
      description: "Our team consists of highly skilled and experienced medical professionals."
    },
    {
      icon: FaCheckCircle,
      title: "Cutting-edge Technology",
      description: "We utilize the latest technology to offer advanced and effective treatments."
    },
  ];

  return (
    <VStack align="center" spacing={10} mt={15} mb={6}>
      <Heading fontSize="4xl" mb={4}>
        Why Choose Us
      </Heading>

      <Flex justify="center" justifyContent="center">
        <Box w="70%" bg="#9DB2BF" p={3} borderRadius="xl">
          <Flex justify="space-between">
            {whyChooseUsItems.map((item, index) => (
              <Box key={index} p={4} m={1} borderWidth="1px" borderColor="gray.200" borderRadius="md">
                <Flex align="center" mb={2}>
                  <Icon as={item.icon} boxSize={6} color="green.500" />
                  <Heading as="h2" fontSize="md" ml={2}>
                    {item.title}
                  </Heading>
                </Flex>
                <Text>{item.description}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
};
