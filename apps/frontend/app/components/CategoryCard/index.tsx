import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Box, Card, Flex } from "@radix-ui/themes";

const CategoryCard = ({
  id,
  name,
  image,
}: {
  id: string;
  name: string;
  image: string;
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

            <Badge
              size="3"
              color="gray"
              variant="solid"
              className="absolute bottom-5 right-0 left-0 ml-auto mr-auto w-2/3 text-center flex justify-center"
            >
              {name}
            </Badge>
          </Flex>
        </Card>
      </Box>
    </Link>
  );
};

export default CategoryCard;
