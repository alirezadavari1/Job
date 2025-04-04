import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import "./btn.css";

export default function BtnBot() {
  return (
    
    <button
    className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded border-none shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
  >
    <FaSearch />
    <span>جستجوی شغل</span>
  </button>
  
  )
}
