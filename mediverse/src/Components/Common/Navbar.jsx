import { Flex, Spacer, Button, Image, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContextProvider';

function Navbar() {
    const { loggedInUser, handleLogout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Flex
            position="sticky"
            top={0}
            width="100%"
            alignItems="center"
            bgColor="lightblue"
            p={4}
            height="60px"
            zIndex={1}
        >
            <Image src="https://i.ibb.co/HChDPm0/Mediverse-3.png" width={200} />
            <Spacer />
            <LinkButton href="/" isActive={location.pathname === '/'}>Home</LinkButton>
            <Spacer />
            <LinkButton href="/services" isActive={location.pathname === '/services'}>Services</LinkButton>
            <Spacer />
            <LinkButton href="/about" isActive={location.pathname === '/about'}>About</LinkButton>
            <Spacer />
            <LinkButton href="/faq" isActive={location.pathname === '/faq'}>FAQ</LinkButton>
            <Spacer />
            {loggedInUser ? (
                <Flex gap={4} alignItems="center">
                    {/* <Text>Hi, {loggedInUser.name}</Text> */}
                    <Button borderRadius="2xl">{loggedInUser.name}</Button>
                    <Spacer />
                    <Button colorScheme='green' onClick={handleLogout}>
                        Log out
                    </Button>
                </Flex>
            ) : (
                <Flex gap={4}>
                    <Button colorScheme="blue" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                    <Spacer />
                    <Button colorScheme='green' onClick={() => navigate('/signup')}>
                        Sign Up
                    </Button>
                </Flex>
            )}
        </Flex>
    );
}

function LinkButton({ children, href, isActive }) {
    const navigate = useNavigate();

    return (
        <Button variant="link"
            colorScheme={isActive && "blue"}
            onClick={() => navigate(href)}
            color={isActive ? '#191D88' : 'inherit'}
            fontWeight={isActive ? 'bold' : 'normal'}
            fontSize={isActive ? 'xl' : 'lg'}
        >
            {children}
        </Button>
    );
}

export default Navbar;
