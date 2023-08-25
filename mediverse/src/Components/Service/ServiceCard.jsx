import React from 'react';
import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

export const ServiceCard = ({ title, content, icon }) => {
    const IconComponent = icon;
    return (
        <Center>
            <Box
                //width="100%"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                textAlign="center"
                boxShadow="xl"
            >
                <IconComponent size={30} color="blue.500" mb={2} />
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
