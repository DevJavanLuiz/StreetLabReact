import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Modal from "../ModalBase";
import "./style.css";
import { useState } from "react";
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
  let color = "";
  const [sizeSelected, setSizeSelected] = useState("");

  function validSend() {
    if (!sizeSelected) return toast.info("Selecione um tamanho!");

    window.open(
      `https://api.whatsapp.com/send?phone=558185187616&text=*COBAIA-001*: Olá, eu estou interessado(a) no item *${name}* que está custando *R$${price}*, eu gostaria da cor *${color}* e com tamanho *${sizeSelected}*.`,
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
          <h4 className="description">{description}</h4>
          <p className="price-product">R${price}</p>
          <p>COR</p>
          <div className="colors">
            {types.map((type) => {
              color = type?.name;
              return (
                <div
                  className={"color-product"}
                  key={type?.name}
                  style={{ backgroundColor: type?.hex }}
                ></div>
              );
            })}
          </div>
          <p>TAM</p>
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
