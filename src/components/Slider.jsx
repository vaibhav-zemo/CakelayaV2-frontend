import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SultanpurSlides } from "../data";
import {
  Image,
  HStack,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{
        width: "100%",
        height: "580px",
      }}
    >
      {SultanpurSlides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `linear-gradient(
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.5)
            ), url(${slide.bg})`,
            backgroundSize: "cover",
          }}
        >
          <Flex
            px={16}
            gap={{ base: 4, tablet: 40 }}
            justifyContent={"space-between"}
            flexDir={{ base: "column", tablet: "row" }}
            alignItems={"center"}
          >
            <Image src={slide.img} alt={slide.title} />
            <VStack gap={0} alignItems={"start"}>
              <Heading fontSize={"5xl"}>{slide.title}</Heading>
              <Text
                fontSize={"xl"}
                fontWeight={"500"}
                textAlign={"start"}
                mt={10}
              >
                {slide.desc}
              </Text>
              <HStack mt={8}>
                <Button>Order Now</Button>
                <Text fontWeight={"500"} ml={4}>
                  Starting at just ₹{slide.price}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
