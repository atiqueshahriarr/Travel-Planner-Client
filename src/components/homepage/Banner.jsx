import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
    return (
        <Fade>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center md:bg-center"
                        style={{
                            backgroundImage: "url(/BannerImg1.jpg)",
                        }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: "url(/BannerImg2.jpg)",
                        }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[550px] lg:h-[650px] xl:h-700px] bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: "url(/BannerImg3.jpg)",
                        }}></div>
                </SwiperSlide>
            </Swiper>
        </Fade>
    );
};

export default Banner;
