// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      © {new Date().getFullYear()} —  
      <a href="https://github.com/sarveshtiku" target="_blank" rel="noreferrer">
        sarveshtiku
      </a>
    </footer>
  );
}
