/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Methodology from "./pages/Methodology";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rolam" element={<About />} />
          <Route path="szolgaltatasok" element={<Services />} />
          <Route path="modszertan" element={<Methodology />} />
          <Route path="kapcsolat" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
