import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLayout";
import routes from "./routes/routes";
import SingleProduct from "./Pages/SingleProduct";
import Saved from "./Pages/Saved";
import Bag from "./Pages/Bag";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          className: "text-main bg-surface",
          duration: 3000,
          removeDelay: 1000,

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "lightgreen",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
    </Router>
  );
}

export default App;
