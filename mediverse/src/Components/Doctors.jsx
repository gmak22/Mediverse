import React from 'react';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

const team = [
    {
        name: "Dr. Michael Lee",
        image: "https://cdn.create.vista.com/api/media/medium/115968882/stock-photo-male-doctor-with-stethoscope-and-clipboard",
        education: "Neurologist"
    },
    {
        name: "Dr. Maria",
        image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg",
        education: "Cardiologist"
    },
    {
        name: "Dr. Emily Davis",
        image: "https://img.freepik.com/premium-photo/pleased-young-female-doctor-wearing-medical-robe_521733-9647.jpg",
        education: "Dermatologist"
    },
    {
        name: "Dr. Mark Johnson",
        image: "https://img.freepik.com/free-photo/medium-shot-doctor-with-stethoscope_23-2148816188.jpg",
        education: "General Surgeon"
    },
    {
        name: "Dr. Jane Smith",
        image: "https://img.freepik.com/free-photo/male-doctor-portrait-with-medical-mask_23-2148947586.jpg",
        education: "Orthopedic Surgeon"
    },
    {
        name: "Dr. Sarah Brown",
        image: "https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg",
        education: "Psychiatrist"
    },


]

const Doctors = () => {
    const teamRows = [team.slice(0, 3), team.slice(3)];

  return (
    <Box>
      {teamRows.map((row, rowIndex) => (
        <Flex key={rowIndex} justifyContent="center" mt={rowIndex > 0 ? 8 : 0}>
          {row.map((member, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="md"
              p={4}
              textAlign="center"
              maxW="200px"
              width="100%"
              shadow="md"
              m={4}
              bg="#D5FFD0"
            >
              <Image
                src={member.image}
                alt={`Image of ${member.name}`}
                borderRadius="full"
                boxSize="150px"
                mx="auto"
              />
              <Text mt={4} fontSize="xl" fontWeight="bold">
                {member.name}
              </Text>
              <Text mt={2} fontSize="lg">{member.education}</Text>
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  );
};

export default Doctors;
