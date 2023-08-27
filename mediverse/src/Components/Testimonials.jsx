import {
  Container,
  Text,
  VStack,
  Box,
  Image, Flex
} from '@chakra-ui/react';

const testimonials = [
  {
    username: "Emily Turner",
    content: "The team at Mediverse provided me with exceptional care and support. They took the time to explain my treatment options and made me feel confident in my health decisions.",
    image: "https://i.ibb.co/TvmR34H/beautiful-woman-standing-against-yellow-wall.jpg",
  },
  {
    username: "Michael Harris",
    content: "I'm truly thankful for the expertise of the doctors at Mediverse. Their thorough diagnosis and personalized treatment plan helped me recover quickly from my health issue.",
    image: "https://i.ibb.co/GH3W2bw/young-businessman-using-smartphone-holding-coffee-cup-hand.jpg"
  },
  {
    username: "Jessica Collins",
    content: "Mediverse has been a reliable partner in my healthcare journey. From routine check-ups to more complex treatments, their team has always been supportive, knowledgeable, and thorough.",
    image: "https://i.ibb.co/TvmR34H/beautiful-woman-standing-against-yellow-wall.jpg"
  },
  {
    username: "Alexander Lee",
    content: "Mediverse's team goes above and beyond to ensure patient comfort and satisfaction. Their commitment to providing accessible and high-quality care is truly commendable.",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg"
  }
]

const TestimonialCard = () => {
  return (
    <Container>
      {testimonials.map((testimonial, index) => (
        <VStack key={index} >
          <Flex my={3} p={2} direction={{ base: 'column', md: 'row' }} alignItems="center"
           border="1px solid #E2E8F0"
           borderRadius="xl"
           bg="#FBF0B2"
           >
            <Box flex={{ base: 1, md: 2 }}>
              <Image src={testimonial.image} alt={`Image of ${testimonial.username}`} maxW="100%" rounded="full"/>
            </Box>
            <Box flex={{ base: 1, md: 4 }} ml={{ base: 0, md: 8 }}>
              <Text fontSize="md" mb={3}>
                "{testimonial.content}"
              </Text>
              <Text fontWeight="bold">{`- ${testimonial.username}`}</Text>
            </Box>
          </Flex>
        </VStack>
      ))}
    </Container>
  )
};

export default TestimonialCard;