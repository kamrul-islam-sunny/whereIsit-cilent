import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      title: "Empowering the Future with AI",
      description:
        "Support groundbreaking projects in artificial intelligence that are changing the world.",
      img: "https://drsw10gc90t0z.cloudfront.net/AcuCustom/Sitename/DAM/527/AI.jpg",
    },
    {
      title: "Support Business Growth",
      description:
        "Help established businesses scale up their operations, innovate, and reach new markets.",
      img: "https://co-offiz.com/wp-content/uploads/2023/05/Business-Growth-1.png",
    },
    {
      title: "Farming for the Future",
      description:
        "Support sustainable agricultural projects that aim to improve efficiency and production.",
      img: "https://insidetelecom.com/wp-content/uploads/2020/10/smart-farming3.jpg",
    },
    {
      title: "Support the Development of Medical Devices",
      description:
        "Invest in the creation of new medical technologies that will save lives and improve health outcomes.",
      img: "https://t3.ftcdn.net/jpg/02/46/70/82/360_F_246708269_WzeXfbrGzkX5axOatRwF0kagyBtGjXh5.jpg",
    },
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
