import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center md:bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/YtbrZsw/best-places-to-visit-in-december-in-asia-halong-bay-hanoi-vietnam.jpg)",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/ZfJx2CJ/Pahalgam-Valley-scaled.jpg)",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-700px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/ydHf19h/67990-Jammu-And-Kashmir.jpg)",
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
