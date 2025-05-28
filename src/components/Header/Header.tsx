import "./Header.css";

type props = {
  title:string;
  description:string;
}

export default function Header({ title, description }:props) {
  return(
    <header id="header">
      <h2>{title}</h2>
      <h4>{description}</h4>
    </header>
  )
}
