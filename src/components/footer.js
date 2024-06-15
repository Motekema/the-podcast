import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2024 Corporate. All Right Reserved.</div>
      <div className="socials">
        <ul>
        <li><a href="https://www.facebook.com/LTidoMusic/"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://x.com/l_tido?lang=en"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/l_tido/?hl=en"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;