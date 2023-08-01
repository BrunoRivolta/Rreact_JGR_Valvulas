import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from './pages/PaginaPadrao/PaginaPadrao';
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
           <Route index element={<Home />} ></Route>
            <Route path='/sobre' element={<Sobre/>} />
            {/*<Route path='/adicionar' element={<AddMovie/>} />
            <Route path="*" element={<div>Pagina não encontrada!</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
