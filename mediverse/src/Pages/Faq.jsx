import React from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
} from '@chakra-ui/react';

export const Faqpage = () => {
  const faqData = [
    {
      question: "What is the purpose of this website?",
      answer: "Our website provides a platform that allows users to easily book appointments with medical professionals in various specialties."
    },
    {
      question: "Do I need to create an account to book an appointment?",
      answer: "Yes, you'll need to create a secure account on our website. This helps us manage your appointments and provide you with relevant information."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely. We take your privacy seriously and employ the latest security measures to protect your data. You can learn more about our security practices in our Privacy Policy."
    },
    {
      question: "How far in advance can I book appointments?",
      answer: "Appointments can generally be booked up to 1 week in advance. However, this may vary based on the doctor's availability and specialty."
    },
    {
      question: "Can I see the doctor's qualifications?",
      answer: "Yes, each doctor's profile includes their qualifications, specialties to help you make an informed decision."
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer: "Once you've completed the booking process, you'll receive a confirmation email and/or SMS with the details of your appointment."
    },
    {
      question: "Is this service available 24/7?",
      answer: "While you can browse doctors and make appointments at any time, the availability of specific doctors and time slots may vary."
    }
  ];

  return (
    <Box p={4} bg="#B9B4C7" w="70%" margin="auto" mt={12} mb={20} borderRadius="xl">
      <Heading as="h1" fontSize="2xl" mb={4} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} bg="#FAF0E6" borderRadius="md" mb={1}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faq.answer}
            </AccordionPanel>
            <Spacer />
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};