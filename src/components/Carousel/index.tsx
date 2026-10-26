/* eslint-disable react/no-array-index-key */
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface ICarouselProps {
  // Mudamos aqui de ComponentType para ReactNode[]
  cards: React.ReactNode[];
}

export default function Carousel({ cards }: ICarouselProps) {
  return (
    <Box width="100%" mx="auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween="20px"
        loop
        noSwiping
        slidesPerView="auto"
      >
        {cards.map((cardElement, index) => (
          <SwiperSlide key={index} style={{ width: '300px', padding: '0' }}>
            {cardElement}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
