import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

const Carousel = () => {
    const [headImages, setHeadImages] = useState([]);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await axios.get(`https://picsum.photos/v2/list`);
                setHeadImages(response.data);
            } catch (error) {
                console.error('Error loading header images', error);
            }
        };
        fetchHeader();
    }, []);
  return (
    <Swiper className='rounded'
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000 }}
            loop
            navigation={true}
        >
            {headImages.slice(0, 5).map((image) => (
                <SwiperSlide key={image.id}>
                    <img
                        src={image.download_url}
                        alt={image.author}
                        className="w-full h-64 object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
  );
};

export default Carousel;
