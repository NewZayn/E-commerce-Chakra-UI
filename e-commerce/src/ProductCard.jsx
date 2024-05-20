import React from 'react';
import { Box, Image, Heading, Button } from '@chakra-ui/react';

const ProductCard = ({ image, title }) => {
  return (
    <Box w="100%" textAlign="center" p="4" boxShadow="md" borderRadius="md" bg="white">
      <Image src={image} alt={title} />
      <Heading size="md" mt="2">
        {title}
      </Heading>
      <Button colorScheme="blue" mt="2">
        Ver detalhes
      </Button>
    </Box>
  );
};

export default ProductCard;
