import "./ContactCard.css";

export default function ContactCard({title, info}) {
  return(
    <div className="contact-card">
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  )
}
