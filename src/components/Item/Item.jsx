import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const SinStock = item.stock === "Sin stock";

  return (
    <Stack justify="center" p={1} align="center" w="auto">
      <Stack spacing={2} w={{ base: "auto" }} align="center">
        <Link to={`/detail/${item.id}`}>
          <Image
        boxShadow='dark-xs' p='0' rounded='md' bg='white'

            src={item.image}
            objectFit="cover"
            h={{ base: "200px", md: "auto" }}
            maxW={{ base: "auto", md: "190px" }}
            alt=""
          />
        </Link>
        <Box fontSize={{ base: "13px" }}>{item.title}</Box>
        <Box fontWeight="800">${item.price}</Box>
        <Stack>
        <Badge fontSize='0.8em'  colorScheme={SinStock?'red':'green'}>{item.stock}</Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Item;
