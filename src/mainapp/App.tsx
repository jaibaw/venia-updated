// import ProductList from "../container/ProductList";
import ProductDetail from "../container/ProductDetail";
import ShoppingCart from "../container/ShoppingCart";
import Appbar from "../component/header/Appbar"
import Footer from "../component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { action_fetchProductList } from "../actions/get-products";
import Home from "../container/Home";
import CheckoutContainer from "../container/CheckoutContainer";
import Order from "../container/Order";
import Delete from "../component/common/Delete";
import Women from "../component/content/menuBar/Women";
import Men from "../component/content/menuBar/Men";
import SmartGear from "../component/content/menuBar/SmartGear";
import Accessories from "../component/content/menuBar/Accessories";

//lazy loading
const ProductList = lazy(() => import('../container/ProductList'))
//const Home = lazy(() => import('../container/Home'))

// main app loading
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action_fetchProductList());
  });

  return (
    <>
      <div className="aem-Grid aem-Grid--12">
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
            <header>
              <Appbar />
            </header>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
            <main>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.PRODUCT_LIST} element={<ProductList />} />
                <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetail />} />
                <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
                <Route path={ROUTES.CHECKOUT} element={<CheckoutContainer />} />
                <Route path={ROUTES.ORDER_PLACES} element={<Order />} />
                <Route path={ROUTES.DELETE_PRODUCT} element={<Delete />} />
          
                <Route path={ROUTES.WOMEN} element={<Women />} />
                <Route path={ROUTES.MEN} element={<Men />} />
                <Route path={ROUTES.SMART_GEAR} element={<SmartGear />} />
                <Route path={ROUTES.ACCESSORIES} element={<Accessories />} />
          
              </Routes>
            </main>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
            <footer>
              <Footer />
            </footer>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
