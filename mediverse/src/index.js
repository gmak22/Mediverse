import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './Components/Auth/AuthContextProvider';

const fontStyles = {
  fontFamily: 'Poppins, sans-serif',
  backgroundColor: '#edeeef',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Box h="100vh">
      <AuthProvider>
        <BrowserRouter>
          <div style={fontStyles}>
            <App />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </Box>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
