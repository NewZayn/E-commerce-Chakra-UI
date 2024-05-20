import React from 'react';
import { Box, Flex, Heading, Button, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
      w="full"
      position="fixed"
      top="0"
      zIndex="1"
    >
      <Box>
        <Heading size="md">Minha Loja</Heading>
      </Box>
      <HStack spacing="24px">
        <Link as={RouterLink} to="/">
          <Button colorScheme="white" variant="ghost">
            Home
          </Button>
        </Link>
        <Link as={RouterLink} to="/about">
          <Button colorScheme="white" variant="ghost">
            Sobre
          </Button>
        </Link>
        <Button colorScheme="white" variant="ghost">
          Login
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
