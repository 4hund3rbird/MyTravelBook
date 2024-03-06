import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Hompage from "./pages/Hompage";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
