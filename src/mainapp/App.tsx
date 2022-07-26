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

//lazy loading
const ProductList = lazy(() => import('../container/ProductList'))

// main app loading
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // window.localStorage.setItem('cart', JSON.stringify([]))
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
                <Route path={ROUTES.PRODUCT_LIST} element={<ProductList />} />
                <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetail />} />
                <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
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
