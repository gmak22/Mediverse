import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    ChakraProvider,
    Input,
    FormControl,
    FormLabel,
    Heading,
    Link,
    Alert,
    AlertIcon,
    Spacer,
} from '@chakra-ui/react';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('');

    const showAlert = (status, message) => {
        setAlertStatus(status);
        setAlertMessage(message);
        setTimeout(() => {
            setAlertStatus('');
            setAlertMessage('');
        }, 3000);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const savedData = JSON.parse(localStorage.getItem('signup')) || [];

        for (let i = 0; i < savedData.length; i++) {
            if (email !== '' && savedData[i].email === email) {
                showAlert('error', 'Account already exists!');
                return;
            }
        }

        if (email === '' || password === '') {
            showAlert('error', 'Please enter email and new password!');
        } else if (email === '') {
            showAlert('error', 'Please enter email');
        } else if (password === '') {
            showAlert('error', 'Please create password');
        } else if (name === '') {
            showAlert('error', 'Please enter name');
        } else {
            savedData.push({ name, email, password });
            localStorage.setItem('signup', JSON.stringify(savedData));
            showAlert('success', 'Account created successfully!');
            navigate('/login');
        }
    };

    return (
        <ChakraProvider>
            <Box id="main" textAlign="center" py="8">
                {alertStatus && (
                    <Alert status={alertStatus}>
                        <AlertIcon />
                        {alertMessage}
                    </Alert>
                )}
                <form onSubmit={handleSignup}>
                    <Heading as="h2" mb="4">
                        Sign Up
                    </Heading>
                    <p>Create a free account with your email</p>
                    <FormControl id="nameInput" mb="4">
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="emailInput" mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="passwordInput" mb="4">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Create new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">
                        Sign up
                    </Button>
                    <Box id="notify" mt="4">
                        <p>Already a member?</p>
                        <Link href="/login">Sign in</Link>
                    </Box>
                </form>
            </Box>
        </ChakraProvider>
    );
}

export default Signup;
