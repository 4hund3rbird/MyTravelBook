import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Hompage from "./pages/Hompage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Applayout from "./pages/Applayout";
import Listofcities from "./Components/Listofcities";
import Listofcountries from "./Components/Listofcountries";
import Detailsform from "./Components/Detailsform";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="applayout" element={<Applayout />}>
          <Route path="cities" element={<Listofcities />} />
          <Route path="countries" element={<Listofcountries />} />
          <Route path="form" element={<Detailsform />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
