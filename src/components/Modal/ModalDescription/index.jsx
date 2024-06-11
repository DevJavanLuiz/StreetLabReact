import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Modal from "../ModalBase";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ModalDescription({
  isOpen,
  setIsOpen,
  price,
  description,
  sizes = [],
  types = [],
  name,
}) {
  const [color, setColor] = useState("");
  const [sizeSelected, setSizeSelected] = useState("");

  function validSend() {
    if (!sizeSelected) return toast.info("Selecione um tamanho!");
    if (!color) return toast.info("Selecione uma cor!");

    window.open(
      `https://api.whatsapp.com/send?phone=558188550476&text=Cobaia001: Gostaria de obter a(o) ${name} que está custando ${price} com a cor ${color} com tamanho ${sizeSelected}`,
      "_blank"
    );
  }

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
          <div className="sizes">
            {sizes.map((size) => {
              return (
                <div
                  key={size}
                  className={`size-product ${
                    size === sizeSelected ? "size-product-selected" : ""
                  } `}
                  onClick={() => {
                    setSizeSelected(size);
                  }}
                >
                  {size}
                </div>
              );
            })}
          </div>
          <div className="talk-me">
            <button onClick={validSend}>Comprar</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
