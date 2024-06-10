import Footer from "./components/footer";
import Card from "./components/Card";
import products from "./assets/DB/produtos";
import NavBar from "./components/navBar";
import { useState, useEffect } from "react";
import ModalDescription from "./components/Modal/ModalDescription";

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
      <NavBar />
      <main>
        <input
          type="text"
          onChange={(event) => {
            setBanana(event.target.value);
          }}
        ></input>
        <h1>Produtos</h1>
        <ModalDescription
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          name={modalContent?.nome}
          price={modalContent?.preço}
          types={modalContent?.types}
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
