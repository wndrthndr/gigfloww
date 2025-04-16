import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const TestimonialSlider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      autoplay: { delay: 4000 },
      pagination: { el: ".swiper-pagination" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }, []);

  return (
    <div className="swiper w-full max-w-xl mx-auto my-8">
      <div className="swiper-wrapper">
        <div className="swiper-slide p-6 bg-white rounded shadow text-center">
          <p>“GigFloww helped me land my first freelance project!”</p>
          <h4 className="mt-2 font-bold"> Subash S</h4>
        </div>
        <div className="swiper-slide p-6 bg-white rounded shadow text-center">
          <p>“I love how easy it is to showcase my portfolio.”</p>
          <h4 className="mt-2 font-bold"> Simran </h4>
        </div>
        <div className="swiper-slide p-6 bg-white rounded shadow text-center">
          <p>“The best platform for new creators!”</p>
          <h4 className="mt-2 font-bold"> Jack</h4>
        </div>
      </div>

      <div className="swiper-pagination mt-4"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default TestimonialSlider;
