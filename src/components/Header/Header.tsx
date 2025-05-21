import "./Header.css";

export default function Header({ title, description }) {
  return(
    <header id="header">
      <h2>{title}</h2>
      <h4>{description}</h4>
    </header>
  )
}
