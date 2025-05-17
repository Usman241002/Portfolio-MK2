import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="flex-container">
      <p>
        &copy; {new Date().getFullYear()} Usman Khalid. All rights reserved. |
        Designed and developed by Usman Khalid
      </p>
    </footer>
  );
}
