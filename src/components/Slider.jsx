import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      title: "Lost Something? Let's Bring It Back",
      description:
       "Report lost items or browse found items to quickly reconnect with what you've lost. Help others by returning their belongings.",
      img: "https://t4.ftcdn.net/jpg/01/04/32/51/360_F_104325176_Tx81DzN226TYi2As92zwHsQaTVOoJjad.jpg",
    },
    {
      title: "Found It? Help Someone Reclaim It",
      description:
        "If you've found something, don't wait! List it now to help others recover their belongings. Your small act can make a big difference.",
      img: "https://blog.lostandfound.io/assets/images/the-etiquette-of-finding-and-returning-lost-items.webp",
    },
    {
      title: "Your Lost Belongings, Found",
      description:
        "Lost something valuable? We connect you with finders who are ready to return your belongings. Report it and get started today.",
      img: "https://insidetelecom.com/wp-content/uploads/2020/10/smart-farming3.jpg",
    }
  ];
  return (
    <div className="relative">
      <Swiper
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper absolute  lg:rounded-xl md:h-[500px] h-96"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full flex justify-start  items-end bg-cover bg-center object-cover "
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950 bg-black/25"></div>
              <div className="text-start text-white md:pb-24 pb-12 md:pl-10 pl-5 z-10 max-w-xl">
                <h2 className="md:text-5xl text-2xl font-semibold ">
                  {slide.title}
                </h2>

                <p className="mt-4 md:text-xl text-base">{slide.description}</p>
                <button className="btn bg-emerald-600 border-none text-white hover:bg-emerald-500 hover:text-slate-900 mt-6">
                  SEE CAMPAIGN
                </button>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="absolute inset-0 bg-black opacity-50 z-20 rounded-xl"></div> */}
    </div>
  );
};

export default Slider;
