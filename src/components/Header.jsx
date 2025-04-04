import React from "react";
import "../reset.css";
import "../App.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

const Header = () => {
  return (
    <header className="header py-3" style={{ backgroundColor: "#212121" }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="title text-white fs-3">علی جاب</h1>
        <nav>
          <ul className="navList d-flex flex-wrap list-unstyled mb-0">
            <li className="mx-2">
              <a href="#home" className="text-white text-decoration-none fs-6">فرصت های شغلی</a>
            </li>
            <li className="mx-2">
              <a href="#about" className="text-white text-decoration-none fs-6">شرکت ها</a>
            </li>
            <li className="mx-2">
              <a href="#contact" className="text-white text-decoration-none fs-6">وبلاگ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;