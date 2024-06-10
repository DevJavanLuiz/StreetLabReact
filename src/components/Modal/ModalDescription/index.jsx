import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import produtos from "../../../assets/DB/produtos";
import Modal from "../ModalBase";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ModalDescription({
  isOpen,
  setIsOpen,
  price,
  description,
  size,
  types = [],
  name,
}) {
  const [color, setColor] = useState("");

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="modal-description-content">
        <div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {types
              .reduce((imgs, type) => {
                type.imgsUrl.forEach((image) => {
                  imgs?.push(image);
                });
                return imgs;
              }, [])
              ?.map((images) => {
                return (
                  <SwiperSlide key={images}>
                    <img src={images} alt="" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="info-item">
          <h2 className="name-product">{name}</h2>
          <p>R${price}</p>
          <div className="colors">
            {types.map((type) => {
              return (
                <div
                  className={`color-product ${
                    type.name === color ? "color-product-selected" : ""
                  }`}
                  key={type?.name}
                  style={{ backgroundColor: type?.hex }}
                  onClick={() => {
                    setColor(type?.name);
                  }}
                ></div>
              );
            })}
          </div>
          <div class="talk-me">
            <Link
              target="_blank"
              to={`https://api.whatsapp.com/send?phone=558189100968&text=Oi quero comprar uma camisa da cor ${color}`}
            >
              Comprar!
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
