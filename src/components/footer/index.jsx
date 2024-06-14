import "./style.css";
export default function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="imgs-text">
          <img src="src/components/icons/telefone.png" alt="" />
          <img src="src/components/icons/instagram.png" alt="" />
          <img src="src/components/icons/o-email.png" alt="" />
        </div>
        <div className="text-footer">
          <p>+55 81 9 9999-9999</p>
          <p>@streetlab</p>
          <p>streetlab@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
