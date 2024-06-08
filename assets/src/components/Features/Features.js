export default function Features({ img, text, item_title }) {
  return (
    <>
      <div className="feature-item">
        <img src={img} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{item_title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
