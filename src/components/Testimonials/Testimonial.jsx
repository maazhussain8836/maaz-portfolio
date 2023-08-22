import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Sidebar1 from "../../img/sidebar1.png";
import Ecommerce1 from "../../img/ecommerce1.png";
import HOC from "../../img/hoc.png";
import MusicApp1 from "../../img/musicapp1.png";

const Testimonial = () => {
  const clients = [
    {
      img: Sidebar1,
      review:
        "I developed WhatsThat App which is FYP , a React Native app, for effortless group chat creation and management. Real-time messaging, user admin, and media sharing are at its core. Powered by MongoDB and Node.js, it offers seamless communication in an intuitive interface.",
    },
    {
      img: Ecommerce1,
      review:
        "Introducing NameThatFish an innovative mobile app powered by Google Vision and Lens APIs. It enables users to identify fish species in real-time by simply capturing an image. This app seamlessly integrates third-party and REST APIs, harnessing the power of Firebase for instant push notifications. Dive into the world of aquatic discovery with NameThatFish.",
    },
   
    {
      img: MusicApp1,
      review:
        "Morinaga is a dedicated platform for parents to track their children's BMI and KCAL. With a user-friendly React Native interface and Firestore backend, it simplifies health monitoring. Empowering parents to make informed choices for their children's well-being.",
    },
    {
      img: HOC,
      review:
        "MovieApp is your movie companion app, offering a seamless experience to search for movies and watch trailers. Powered by TMDB APIs, it's the perfect practice project that brings the magic of cinema at your fingertips. Explore films, find showtimes, and dive into the world of movies with MovieApp.",
    },
  ];

  
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
