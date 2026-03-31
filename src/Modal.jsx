function Modal({ item, onClose }) {

  return (
<div className="modal-overlay" onClick={onClose}>
<div className="modal-box" onClick={(e) => e.stopPropagation()}>
<button className="close-btn" onClick={onClose}>

          ×
</button>
<img src={item.image} alt={item.name} className="modal-image" />
<h2>{item.name}</h2>
<p>
<strong>Class:</strong> {item.class}
</p>
<p>
<strong>Description:</strong> {item.desc}
</p>
<p>
<strong>Containment:</strong> {item.containment}
</p>
<p>
<strong>Reference:</strong> {item.reference}
</p>
</div>
</div>

  );

}

export default Modal;
 