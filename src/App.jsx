import React, { useState } from "react";
import Header from "./components/Header";
import "./reset.css";
import "./App.css";
import BtnBot from "./BtnBot";
import CardComponent from "./CardComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // اضافه کردن بوت‌استرپ

function App() {
  const [salary, setSalary] = useState(5000000);

  const handleSalaryChange = (e) => {
    const newSalary = Number(e.target.value);
    setSalary(newSalary);
    e.target.style.setProperty(
      "--progress",
      ((newSalary - 5000000) / (70000000 - 5000000)) * 100 + "%"
    );
  };

  return (
    <div>
      <Header />
      <main dir="rtl" id="main-1" className="container text-center py-4">
        <h1 className="mb-4" id="h1-head">
          شغل رویایی خود را پیدا کنید
        </h1>

        <div className="row justify-content-center mb-3">
          <div className="col-md-4">
            <input
              id="input-text-1"
              className="form-control"
              dir="rtl"
              type="text"
              placeholder="از چه شهری؟"
            />
          </div>
          <div className="col-md-4">
            <input
              id="input-text-2"
              className="form-control"
              dir="rtl"
              type="text"
              placeholder="چه شغلی؟"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
          <label className="switch m-0">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="label-text">فقط حضوری</span>

          <label className="switch m-0">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="label-text">تمام وقت</span>
        </div>

        <div className="d-flex flex-column align-items-center p-3">
          <label className="fs-5 fw-medium mb-2">
            محدوده حقوق تا: <span className="fw-bold">{salary.toLocaleString()} تومان</span>
          </label>
          <input
            type="range"
            min="5000000"
            max="70000000"
            step="1000000"
            value={salary}
            onChange={handleSalaryChange}
            className="form-range custom-range w-50"
          />
        </div>

        <BtnBot />
        
        <h1 id="a-2">لیست شغل ها:</h1>
        <hr />

        <div className="row">
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <CardComponent />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
