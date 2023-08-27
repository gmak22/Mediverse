import React from 'react';
import {
    Box,
    chakra,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Flex,
    Button
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'bold'} fontSize={'2xl'} mb={2}>
            {children}
        </Text>
    );
};

// export default function Footer() {
//     return (
//         <Box
//             bg="#add8e6"
//             color={useColorModeValue('gray.700', 'gray.200')}
//         >
//             <Container as={Stack} maxW={'6xl'} py={10}>
//                 <SimpleGrid
//                     templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
//                     spacing={13}
//                 >
//                     <Stack spacing={6}>
//                         <Box>
//                             <Image src="https://i.ibb.co/HChDPm0/Mediverse-3.png" alt="Mediverse" width={100} />
//                         </Box>
//                         <Text fontSize={'sm'}>© 2024 Mediverse. All rights reserved</Text>
//                         <Stack direction={'row'} spacing={3}>
//                             <SocialButton label={'Twitter'}>
//                                 <FaTwitter />
//                             </SocialButton>
//                             <SocialButton label={'YouTube'}>
//                                 <FaYoutube />
//                             </SocialButton>
//                             <SocialButton label={'Instagram'}>
//                                 <FaInstagram />
//                             </SocialButton>
//                         </Stack>
//                     </Stack>
//                     <Stack align={'flex-start'}>
//                         <ListHeader>Contact Us</ListHeader>
//                         <Box>+91 8080123568</Box>
//                         <Box>support@mediverse.com</Box>
//                     </Stack>
//                     <Stack align={'flex-start'}>
//                         <ListHeader>Support</ListHeader>
//                         <Box>Help Center</Box>
//                         <Box>Terms of Service</Box>
//                         <Box>Legal</Box>
//                         <Box>Privacy Policy</Box>
//                     </Stack>
//                     <Stack align={'flex-start'}>
//                         <ListHeader>Subscribe To Our Newsletter</ListHeader>
//                         <Stack direction={'row'}>
//                             <Input
//                                 placeholder='Your email address'
//                                 border={0}
//                                 bg="white"
//                             />
//                             <IconButton
//                                 bg={useColorModeValue('green.400', 'green.800')}
//                                 color={useColorModeValue('white', 'gray.800')}
//                                 _hover={{
//                                     bg: 'green.600',
//                                 }}
//                                 aria-label="Subscribe"
//                                 icon={<BiMailSend />}
//                             />
//                         </Stack>
//                     </Stack>
//                 </SimpleGrid>
//             </Container>
//         </Box>
//     );
// }

export default function Footer() {
    return (

        <Box bg="#337CCF">
            <Flex justifyContent="space-evenly" p={10} color="white">
                <Stack spacing={6}>
                    <Box>
                        <Image src="https://i.ibb.co/HChDPm0/Mediverse-3.png" alt="Mediverse" width={100} />
                    </Box>
                    <Text fontSize={'lg'}>© 2024 Mediverse. All rights reserved</Text>

                    <Flex gap={5}>
                        <Button rounded={"full"}>
                            <FaTwitter />
                        </Button>
                        <Button rounded={"full"}>
                            <FaYoutube />
                        </Button>
                        <Button rounded={"full"}>
                            <FaInstagram />
                        </Button>
                    </Flex>
                </Stack>

                <Box>
                    <ListHeader>Contact Us</ListHeader>
                    <Box>+91 8080123568</Box>
                    <Box>support@mediverse.com</Box>
                </Box>

                <Box>
                    <ListHeader>Support</ListHeader>
                    <Box>Help Center</Box>
                    <Box>Terms of Service</Box>
                    <Box>Legal</Box>
                    <Box>Privacy Policy</Box>
                </Box>

                <Stack>
                    <ListHeader>Subscribe To Our Newsletter</ListHeader>
                    <Stack direction={'row'}>
                        <Input
                            placeholder='Your email address'
                            border={0}
                            bg="white"
                        />
                        <IconButton
                            bg={useColorModeValue('green.400', 'green.800')}
                            color={useColorModeValue('white', 'gray.800')}
                            _hover={{
                                bg: 'green.600',
                            }}
                            aria-label="Subscribe"
                            icon={<BiMailSend />}
                        />
                    </Stack>
                </Stack>

            </Flex>
        </Box>
    )
}