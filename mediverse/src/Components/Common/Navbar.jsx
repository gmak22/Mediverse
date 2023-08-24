import { Flex, Spacer, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Mediverse.png';
import { useAuth } from '../Auth/AuthContextProvider';

function Navbar() {
    const { loggedInUser, handleLogout } = useAuth();
    const navigate = useNavigate();

    return (
        <Flex alignItems="center" bgColor="lightblue" p={4} data-testid="navbar">
            <Image src={logo} width={50} />
            <Spacer />
            <LinkButton href="/">Home</LinkButton>
            <Spacer />
            <LinkButton href="/services">Services</LinkButton>
            <Spacer />
            <LinkButton href="/about">About</LinkButton>
            <Spacer />
            <LinkButton href="/faq">FAQ</LinkButton>
            <Spacer />
            {loggedInUser ? (
                <>
                    <Text>Hi, {loggedInUser.name}</Text>
                    <Spacer/>
                    <Button colorScheme='green' onClick={handleLogout}>
                        Log out
                    </Button>
                </>
            ) : (
                <>
                    <Button colorScheme="blue" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                    <Spacer />
                    <Button onClick={() => navigate('/signup')}>
                        Signup
                    </Button>
                </>
            )}
        </Flex>
    );
}

function LinkButton({ children, href }) {
    const navigate = useNavigate();

    return (
        <Button variant="link" onClick={() => navigate(href)}>
            {children}
        </Button>
    );
}

export default Navbar;
