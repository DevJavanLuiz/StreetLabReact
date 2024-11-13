import "./style.css";
export default function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="imgs-text">
          <img src="public/icons/telefone.png" alt="" />
          <img src="public/icons/instagram.png" alt="" />
          <img src="public/icons/o-email.png" alt="" />
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
