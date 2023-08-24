import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContextProvider';
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
} from '@chakra-ui/react';

function Login() {
  const navigate = useNavigate()
  const { setLoggedInUser } = useAuth();
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

  const handleLogin = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('signup')) || [];
    const found = savedData.find(
      (data) => data.email === email && data.password === password
    );
  
    if (found) {
      console.log(alertStatus,alertMessage)
      showAlert('success', 'Login successful!');
      console.log(alertStatus,alertMessage)
      localStorage.setItem('login', JSON.stringify(found));
      localStorage.setItem('loggedInUser', JSON.stringify(found));
      setLoggedInUser(found);
      navigate('/');
    } else {
      showAlert('error', 'Invalid email or password');
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
          <form onSubmit={handleLogin}>
            <Heading as="h2" mb="4">
              Log in to your account
            </Heading>
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Log in
            </Button>
            <Box id="notify" mt="4">
              <p>Not a member?</p>
              <Link href="/signup">Sign up</Link>
            </Box>
          </form>
        </Box>
      </ChakraProvider>
    );
  }

  export default Login;
