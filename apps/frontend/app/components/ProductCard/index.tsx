import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Badge, Box, Card, Flex, Text } from "@radix-ui/themes";

const ProductCard = ({
  id,
  name,
  price,
  image,
  featured,
}: {
  id: string;
  name: string;
  price: string;
  image: string;
  featured: boolean;
}) => {
  return (
    <Link href={`/products/${id}`}>
      <Box className="mx-2">
        <Card variant="ghost">
          <Flex direction="column" className="relative">
            <Image
              alt={name}
              src={image}
              width={350}
              height={350}
              className="rounded-3xl"
            />
            <Box>
              <Text
                as="div"
                size="2"
                weight="bold"
                className="text-[#1f1f1f] mt-5"
              >
                {name}
              </Text>
              <Text size="2" className="text-red-500 mt-2 font-semibold">
                {price}
              </Text>
            </Box>

            {featured && (
              <Badge
                size="3"
                color="gray"
                variant="solid"
                className="absolute left-7 top-7 "
              >
                Featured
              </Badge>
            )}
          </Flex>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
