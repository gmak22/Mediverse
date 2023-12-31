import React, { useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Collapse,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const toast = useToast();
  const navigate = useNavigate()
  const [cardData, setCardData] = useState({
    cardHolder: "",
    cardNumber: "",
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
  });

  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProceed = () => {
    const { cardNumber, cvv, expiryMonth, expiryYear } = cardData;

    if (!cardNumber || !cvv || !expiryMonth || !expiryYear) {
      toast({
        title: 'Enter Valid Details!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else {
      setShowOTP(true);
    }
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleBuyNow = () => {
    if(otp == 1234){
      toast({
        title: 'Thank you for your Purchase!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
      navigate('/')
    }
    else{
      toast({
        title: 'Wrong OTP',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
    
  };

  return (
    <Box margin="auto" 
    py={12} px={4} 
    w="45%" 
    bg="#FBF0B2" 
    mt={8} mb={8}
    borderRadius="xl">
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={8}>
        Checkout
      </Heading>
      <form>
        <Stack spacing={6}>
        <FormControl>
            <FormLabel>Cardholder Name</FormLabel>
            <Input
              type="text"
              name="cardHolder"
              value={cardData.cardHolder}
              onChange={handleCardInputChange}
              borderColor="gray"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="number"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleCardInputChange}
              borderColor="gray"
            />
          </FormControl>
          <Flex justify="space-between">
            <FormControl flex="1">
              <FormLabel>Expiry Month</FormLabel>
              <Input
                type="number"
                name="expiryMonth"
                value={cardData.expiryMonth}
                onChange={handleCardInputChange}
                borderColor="gray"
              />
            </FormControl>
            <FormControl flex="1" ml={4}>
              <FormLabel>Expiry Year</FormLabel>
              <Input
                type="number"
                name="expiryYear"
                value={cardData.expiryYear}
                onChange={handleCardInputChange}
                borderColor="gray"
              />
            </FormControl>
            <FormControl flex="1" ml={4}>
              <FormLabel>CVV</FormLabel>
              <Input
                type="number"
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardInputChange}
                borderColor="gray"
              />
            </FormControl>
          </Flex>
        </Stack>
        <Button
          colorScheme="red"
          size="lg"
          onClick={handleProceed}
          mt={8}
          isFullWidth
        >
          Proceed
        </Button>

      </form>
      <Collapse in={showOTP} animateOpacity>
        <FormControl mt={4}>
          <FormLabel>Enter OTP</FormLabel>
          <Input
            type="number"
            value={otp}
            onChange={handleOTPChange}
          />
        </FormControl>
        <Button
          colorScheme="red"
          size="lg"
          onClick={handleBuyNow}
          mt={4}
          isFullWidth
        >
          Buy Now
        </Button>
      </Collapse>
    </Box>
  );
}

export default Checkout;
