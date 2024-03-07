import { Routes, Route } from "react-router-dom";

import Homepage from "./HomePage";
import ProductsBox from "./ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductsBox />} />
    </Routes>
  );
}

export default App;
