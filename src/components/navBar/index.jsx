import "./style.css";

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="nav-image">
          <img src="src/components/icons/Logo Sem fundo.png" alt="" />
        </div>

        <div className="nav-info">
          {" "}
          <a href="#product">Produtos</a>
          <a href="#contact">Contatos</a>
        </div>
      </nav>
    </header>
  );
}
