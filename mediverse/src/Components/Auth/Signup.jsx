import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Text,
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel,
    Heading,
    Link,
    Spacer,
    useToast,
} from '@chakra-ui/react';

function Signup() {
    const navigate = useNavigate();
    const toast = useToast();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        const savedData = JSON.parse(localStorage.getItem('signup')) || [];

        for (let i = 0; i < savedData.length; i++) {
            if (email !== '' && savedData[i].email === email) {
                toast({
                    title: 'Please fill details first!',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                });
                return;
            }
        }

        if (email === '' || password === '') {
            toast({
                title: 'Please enter email and new password!',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
        } else if (email === '') {
            toast({
                title: 'Please enter email!',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });

        } else if (password === '') {
            toast({
                title: 'Please create password!',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
        } else if (name === '') {
            toast({
                title: 'Please enter email name!',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
        } else {
            savedData.push({ name, email, password });
            localStorage.setItem('signup', JSON.stringify(savedData));
            toast({
                title: 'Account created successfully!',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
            navigate('/login');
        }
    };

    return (
        <Box
            w="35%"
            margin="auto"
            bg="#F2ECBE" p={3}
            mt={8} mb={8}
            borderRadius="xl"
            borderColor="black"
        >
            <Box id="main" textAlign="center" py="8" >
                <form onSubmit={handleSignup}>
                    <Heading as="h2" mb="4">
                        Sign Up
                    </Heading>
                    <Text fontWeight="bold">Create a free account with your email</Text>
                    <FormControl id="nameInput" mb="4">
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            _placeholder={{ color: 'black' }}
                            borderColor="gray"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="emailInput" mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            _placeholder={{ color: 'black' }}
                            borderColor="gray"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="passwordInput" mb="4">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Create new password"
                            _placeholder={{ color: 'black' }}
                            borderColor="gray"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="green">
                        Sign up
                    </Button>

                    <Flex margin="auto" mt="4" w="80%" fontWeight="bold">
                        <p>Already a member ?</p>
                        <Spacer />
                        <Link href="/login" color="blue">Sign In</Link>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
}

export default Signup;


