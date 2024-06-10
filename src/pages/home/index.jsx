import "./style.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="inner-header flex">
          <img
            src="./assets/img/Pink Bold Retro Aesthetic Makeup Artist Circle Logo (1) (1).png"
            alt=""
            className="animate__animated animate__fadeInDown animate__repeat-1 1"
          />

          <h1 className="animate__animated animate__fadeInDown animate__repeat-1 1">
            Seja Bem-Vindos(a) ao Street Lab
          </h1>
          <a
            href="https://street-lab.vercel.app/"
            className="btn-welcome animate__animated animate__fadeInDown animate__repeat-1 1"
          >
            Entrar
          </a>
        </div>

        <div></div>
      </div>

      <div className="content flex">
        <p style={{ color: "rgb(124, 252, 0)" }}></p>
      </div>
    </>
  );
}
