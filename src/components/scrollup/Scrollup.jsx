import React from 'react';
import './scrollup.css';

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // quand le scroll est plus grand que 560 viewport height, ajouter la classe show-scroll
    this.scrollY >= 560 
    ? scrollUp.classList.add("show-scroll") 
    : scrollUp.classList.remove('show-scroll');
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup