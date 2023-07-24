import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menus from './pages/Menus/Menus';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menus />}>
          {/* <Route index element={<Movie />} ></Route>
            <Route path='/diretores' element={<Directors/>} />
            <Route path='/adicionar' element={<AddMovie/>} />
            <Route path="*" element={<div>Pagina não encontrada!</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
