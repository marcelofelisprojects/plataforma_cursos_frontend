import { Box } from '@chakra-ui/react';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ICarouselProps {
  card: React.ComponentType<any>;
}

export default function Carousel({ card: Card }: ICarouselProps) {
  return (
    <Box width="100%" mx="auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween="20px"
        loop
        noSwiping
        slidesPerView="auto"
      >
        {[1, 2, 3, 4, 5, 6, 7, 7, 7].map((item) => (
          <SwiperSlide key={item} style={{ width: '300px', padding: ' 0' }}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
