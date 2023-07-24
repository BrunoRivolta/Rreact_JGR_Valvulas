import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Movie />} ></Route>
            <Route path='/diretores' element={<Directors/>} />
            <Route path='/adicionar' element={<AddMovie/>} />
            <Route path="*" element={<div>Pagina não encontrada!</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
