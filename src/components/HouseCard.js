import "../styles/HouseCard.css"

export default function HouseCard({ name, desc, img }) {
  const background = {
    backgroundImage: `url('${img}')`,
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-img" style={background}></div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{desc}</p>
        <button className="card-button">I want it!</button>
      </div>
    </div>
  )
}
