import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.md" mt="4">
      <Heading as="h1" size="xl" mb="4">Sobre Nós</Heading>
      <Text fontSize="lg" mb="4">
        Nossa loja é dedicada a oferecer os melhores produtos para nossos clientes. Temos uma vasta
        gama de produtos de alta qualidade que atendem a todas as suas necessidades.
      </Text>
      <Text fontSize="lg">
        Nossa missão é proporcionar uma experiência de compra excepcional, com um serviço ao
        cliente de excelência e entrega rápida. Agradecemos por escolher nossa loja!
      </Text>
    </Container>
  );
};

export default About;
