import { Link } from '@chakra-ui/react'
import { Flex, Spacer, Button, Image } from '@chakra-ui/react'
import logo from '../../Assets/Mediverse.png';

function Navbar() {

    return (
        <Flex alignItems="center" bgColor="lightblue" p={4} data-testid="navbar">
            <Image src={logo} width={50}/>
            <Spacer />
            <Link href="/">Home</Link>
            <Spacer />
            <Link href="/services">Services</Link>
            <Spacer />
            <Link href="/about">About</Link>
            <Spacer />
            <Link href="/faq">FAQ</Link>
            <Spacer/>
            <Button colorScheme='blue'>Log in</Button>
            <Button>Sign Up</Button>
        </Flex>
    );
}

export default Navbar;
