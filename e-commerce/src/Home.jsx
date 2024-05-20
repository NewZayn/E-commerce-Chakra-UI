import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Button, Container } from '@chakra-ui/react';
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';

const Home = () => {
  return (
    <Container maxW="container.xl" mt="4">
      <Heading as="h1" size="xl" mb="8">Bem-vindo ao PrimeCart</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Box bg="white" p="4" boxShadow="md" borderRadius="md">
            <Image src={product1} alt="Produto 1" />
            <Heading size="md" mt="2">Produto 1</Heading>
            <Button colorScheme="blue" mt="2">Ver detalhes</Button>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="white" p="4" boxShadow="md" borderRadius="md">
            <Image src={product2} alt="Produto 2" />
            <Heading size="md" mt="2">Produto 2</Heading>
            <Button colorScheme="blue" mt="2">Ver detalhes</Button>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="white" p="4" boxShadow="md" borderRadius="md">
            <Image src={product3} alt="Produto 3" />
            <Heading size="md" mt="2">Produto 3</Heading>
            <Button colorScheme="blue" mt="2">Ver detalhes</Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
