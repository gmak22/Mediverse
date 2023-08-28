import React from 'react';
import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

export const ServiceCard = ({ title, content, icon }) => {
    const IconComponent = icon;
    return (
        <Center>
            <Box
                w={500}
                h={250}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                alignItems="center"
                boxShadow="xl"
                textAlign="center"
            >
                <Box>
                    <IconComponent size={30} color="blue.500" mb={5} />
                </Box>

                <Heading size="md" mb={2}>
                    {title}
                </Heading>
                <Text>{content}</Text>
                <Button mt={3} colorScheme="blue">
                    Read More
                </Button>
            </Box>
        </Center>
    );
};
