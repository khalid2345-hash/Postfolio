import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ServicesSlider.css";

const services = [
  {
    title: "UI Designer",
    image: "/designer.jpg",
    badge: "Designer",
  },
  {
    title: "Web Developer",
    image: "/developer.jpg",
    badge: "Developer",
  },
  {
    title: "Content Editor",
    image: "/editor.jpg",
    badge: "Editor",
  },
  {
    title: "Digital Marketer",
    image: "/marketer.jpg",
    badge: "Marketer",
  },
  {
    title: "Game Enthusiast",
    image: "/gamer.jpg",
    badge: "Gamer",
  },
   {
    title: "",
    image: "",
    badge: "",
    link: "",
  },
];

export default function ServicesSlider() {
  return (
    <section className="services">
      <h2 className="services-title">What I Do</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        loop={true}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="services-swiper"
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            
            <div className="card">
              <img src={item.image} alt="" className="card-image" />
              <span className="badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <button className="arrow">→</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
