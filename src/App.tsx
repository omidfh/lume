import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLayout";
import routes from "./routes/routes";
import SingleProduct from "./Pages/SingleProduct";
import Saved from "./Pages/Saved";
import Bag from "./Pages/Bag";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((item) => (
            <Route path={item.url} element={item.component} />
          ))}

          <Route path={"collection/:id"} element={<SingleProduct />} />
          <Route path={"/saved"} element={<Saved />} />
          <Route path={"/bag"} element={<Bag />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
