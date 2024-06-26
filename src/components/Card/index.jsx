import "./style.css";

export default function Card({ name, cost, imgUrl, seeMore }) {
  return (
    <div className="item i01">
      <div className="picture-item">
        <img loading="lazy" src={imgUrl} alt="" />
      </div>
      <div className="about-item">
        <h2>{name}</h2>
        <p>R${cost}</p>
      </div>
      <button className="btn-open" onClick={seeMore}>
        Ver mais
      </button>
    </div>
  );
}
