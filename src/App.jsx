import Footer from "./components/footer";
import Card from "./components/Card";
import products from "./assets/DB/produtos";
import NavBar from "./components/navBar";
import { useState, useEffect } from "react";
import ModalDescription from "./components/Modal/ModalDescription";
import { SplashArt } from "./components/splashArtes";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [banana, setBanana] = useState("");
  const [modalSelected, setModalSelected] = useState(null);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    setModalContent(
      products.camisas.find((camisa) => camisa.id == modalSelected)
    );
    console.log(modalContent);
  }, [modalSelected]);

  function openModal() {
    setIsOpenModal(true);
  }
  return (
    <>
      <SplashArt />
      <NavBar />
      <div className="input-search just-desktop">
        {" "}
        <input
          placeholder="Buscar produtos"
          type="text"
          onChange={(event) => {
            setBanana(event.target.value);
          }}
        ></input>
        <div className="lupa">
          <img src="src/components/icons/lupa.png" alt="" />
        </div>
      </div>
      <div className="input-search just-mobile">
        {" "}
        <input
          placeholder="Buscar produtos"
          type="text"
          onChange={(event) => {
            setBanana(event.target.value);
          }}
        ></input>
        <div className="lupa">
          <img src="src/components/icons/lupa.png" alt="" />
        </div>
      </div>
      <main className="container">
        <ModalDescription
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          name={modalContent?.nome}
          price={modalContent?.preço}
          types={modalContent?.types}
          sizes={modalContent?.sizes}
          description={modalContent?.descricao}
        />
        <div className="grid-product">
          {products.camisas
            .filter((camisa) =>
              camisa.nome.toLowerCase().includes(banana.toLowerCase())
            )
            .map((camisa) => {
              return (
                <Card
                  key={camisa.id}
                  name={camisa.nome}
                  cost={camisa.preço}
                  imgUrl={camisa.types[0].imgsUrl[0]}
                  seeMore={() => {
                    setModalSelected(camisa.id);
                    setIsOpenModal(true);
                  }}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
