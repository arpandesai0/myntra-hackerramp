import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Navbar from "./comps/Navbar";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Events from "./screens/Events";
import { useState } from "react";
import ProductDetails from "./comps/ProductDetails";
function App() {
  const [current, setCurrent] = useState(1);
  const [start, setStart] = useState(false);
  const [fail, setFail] = useState(0);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={<Products setCurrent={setCurrent} current={current} />}
          ></Route>
          <Route
            path="/events"
            element={
              <Events
                current={current}
                setCurrent={setCurrent}
                start={start}
                setStart={setStart}
                fail={fail}
              />
            }
          ></Route>
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                start={start}
                setStart={setStart}
                setCurrent={setCurrent}
                current={current}
                fail={fail}
                setFail={setFail}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
