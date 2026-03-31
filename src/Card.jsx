function Card({ item, onClick }) {

  return (
<div className="card" onClick={onClick}>
<img src={item.image} alt={item.name} className="card-image" />
<div className="card-body">
<h2>{item.name}</h2>
<p>
<strong>Class:</strong> {item.class}
</p>
</div>
</div>

  );

}

export default Card;
 