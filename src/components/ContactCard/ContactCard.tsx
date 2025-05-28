import "./ContactCard.css";

type props = {
  title:string;
  info:string;
}

export default function ContactCard({title, info}: props) {
  return(
    <div className="contact-card">
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  )
}
