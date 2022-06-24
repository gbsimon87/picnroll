import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import { data } from "./data/data.js";

function App() {
  const { nav: { mobile: navMobileData} } = data;
  const { nav: { desktop: navDesktopData } } = data;
  console.log(navMobileData);
  console.log(navDesktopData);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    setNavIsOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar navItems={navMobileData} navIsOpen={navIsOpen} />
        <Backdrop show={navIsOpen} handleCloseSidebar={handleCloseSidebar} />
        <Header navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} navDesktopData={navDesktopData} />
        <Switch>
          <Route exact path="/products/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
