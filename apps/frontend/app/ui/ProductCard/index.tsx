import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Badge, Box, Card, Flex, Text, BadgeProps } from "@radix-ui/themes";

const ProductCard = ({
  id,
  name,
  price,
  image,
  badgeProps,
}: {
  id: string;
  name?: string;
  price?: string;
  image: string;
  badgeProps?: BadgeProps & { text: string };
}) => {
  return (
    <Link href={`/products/${id}`}>
      <Box className="mx-2">
        <Card
          variant="ghost"
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <Flex direction="column" className="relative">
            <img
              alt={name}
              src={image}
              // width={300}
              // height={300}
              className="rounded-3xl w-[400px] h-[400px] object-cover"
            />
            <Box>
              {name && (
                <Text as="div" className="text-[#1f1f1f] mt-5">
                  {name}
                </Text>
              )}
              {price && (
                <Text size="2" className="text-red-500 mt-2 font-semibold">
                  {price}
                </Text>
              )}
            </Box>

            {badgeProps && (
              <Badge
                size="3"
                color={badgeProps.color}
                variant="solid"
                className="absolute left-7 top-7 "
              >
                {badgeProps.text}
              </Badge>
            )}
          </Flex>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
