import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Badge, Box, Card, Flex, Text, BadgeProps } from "@radix-ui/themes";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

const ProductCard = ({
  id,
  name,
  price,
  image,
  badgeProps,
  showHeart = false,
}: {
  id: string;
  name?: string;
  price?: string;
  image: string;
  badgeProps?: BadgeProps & { text: string };
  showHeart?: boolean;
}) => {
  const [hearted, setHearted] = useState(false);
  const toggleHearted = (e) => {
    console.log("e", e);
    e.stopPropagation();
    setHearted((prev) => !prev);
  };

  return (
    // <Link href={`/products/${id}`}>
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
          <div className="flex flex-row justify-between items-center px-4">
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
            {showHeart && (
              <>
                {hearted ? (
                  <div className="p-5 cursor-pointer" onClick={toggleHearted}>
                    <HeartFilledIcon color="red" width={22} height={22} />
                  </div>
                ) : (
                  <div className="p-5 cursor-pointer" onClick={toggleHearted}>
                    <HeartIcon color="#1f1f1f" width={22} height={22} />
                  </div>
                )}
              </>
            )}
          </div>
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
    // </Link>
  );
};

export default ProductCard;
