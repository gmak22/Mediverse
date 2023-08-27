import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContextProvider';
import {
  Box,
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

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const { setLoggedInUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('signup')) || [];
    const found = savedData.find(
      (data) => data.email === email && data.password === password
    );

    if (found) {
      localStorage.setItem('login', JSON.stringify(found));
      localStorage.setItem('loggedInUser', JSON.stringify(found));
      setLoggedInUser(found);
      navigate('/');
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else {
      toast({
        title: 'Please enter valid details!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box textAlign="center"
      py="8" w="35%"
      margin="auto"
      bg="#A2FF86" p={3}
      mt={8} mb={8}
      borderRadius="xl"
    >
      <form onSubmit={handleLogin}>
        <Heading as="h2" mb="4">
          Log in to your account
        </Heading>
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
            placeholder="Enter your password"
            _placeholder={{ color: 'black' }}
            borderColor="gray"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Log in
        </Button>
        <Flex margin="auto" mt="4" w="80%">
          <p>Not a member?</p>
          <Spacer />
          <Link href="/signup" color="blue">Sign Up</Link>
        </Flex>
      </form>
    </Box>
  );
}

export default Login;
